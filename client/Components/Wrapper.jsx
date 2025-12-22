import Footer from "./Footer"
import Header from "./Header"
import { Outlet } from "react-router-dom"
import { ToastContainer} from 'react-toastify'
const Wrapper = () => {
  return (
   <div className="flex flex-col h-screen">
    <Header className="h-auto md:h-[10vh]" />
    <main className="flex-1 overflow-y-auto bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto h-full px-3 sm:px-6">
        <ToastContainer/>
        <Outlet />
      </div>
    </main>
    <Footer className="h-auto md:h-[20vh]" />
   </div>
  )
}

export default Wrapper