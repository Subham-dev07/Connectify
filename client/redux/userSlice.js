import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
const API_URL=import.meta.env.VITE_API_URL;
const validateReg={
    name:/^[a-zA-Z\s]{2,30}$/,
    mobile:/^[0-9]{10}$/,
    email:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    password:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
}
const warnings = {
  name: "Name should be 2–30 characters and contain only letters and spaces.",
  mobile: "Enter a valid 10-digit mobile number.",
  email: "Please enter a valid email address.",
  password:
    "Password must be at least 8 characters and include uppercase, lowercase, number, and special character."
};
const loginSignupUser=createAsyncThunk("user/loginSignupUser",async (userData,{rejectWithValue})=>{
    try {
        const response=await fetch(`${API_URL}/api/auth/loginSignup`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userData)
        });
        const data=await response.json();
        if(!response.ok){
            return rejectWithValue(data.message);
        }
        return data;
    } catch (error) {
        console.log(error);
        return rejectWithValue(error.message);
    }
})
export const validate=(users)=>{
   if(users.type==="signup"){
    if(!validateReg.name.test(users.name)) return warnings.name;
    if(!validateReg.mobile.test(users.mobile)) return warnings.mobile;
   }
    if(!validateReg.email.test(users.email)) return warnings.email;
    if(!validateReg.password.test(users.password)) return warnings.password;
    return null;
}
const  userSlice=createSlice({
    name:"user",
    initialState:{
        users:{name:"",email:"",mobile:"",password:""},
        loading:false,
        error:null,
    },
    reducers:{
        setUserData:(state,action)=>{
              state.users={...state.users,...action.payload};
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(loginSignupUser.pending,(state)=>{
            state.loading=true; 
            state.error=null;
        });
        builder.addCase(loginSignupUser.fulfilled,(state,action)=>{
            state.loading=false;
            state.users={name:"",email:"",mobile:"",password:""};
            state.error=null;
        });
        builder.addCase(loginSignupUser.rejected,(state,action)=>{
            state.loading=false;
            state.error=null;
            state.error=action.payload;
        });
    }
})
export {loginSignupUser};
export const {setUserData}=userSlice.actions;
export default userSlice.reducer;