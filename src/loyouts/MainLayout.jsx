import { Outlet } from "react-router-dom"
import {Footer, Header} from "../components"
function MainLayout() {
  return (
    <>
    <Header/>
    <main className="grow">
        <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default MainLayout