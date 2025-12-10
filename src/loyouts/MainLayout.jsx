import { Outlet } from "react-router-dom"
import {Footer, Header} from "../components"
function MainLayout() {
  return (
    <>
    <Header/>
    <main className=" py-10 grow">
        <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default MainLayout