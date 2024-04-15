import { Outlet } from "react-router-dom"
import Head from "../components/ui/Head"
import Foot from "../components/ui/Foot"

export default function Layout() {

    return (
        <>
            <Head />
            <Outlet />
            <Foot />

        </>
    )
}