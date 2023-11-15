import { Box } from "@mui/material"
import { useState } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
const Layout = () => {
  const [openSidebar, setOpenSidebar] = useState(false)
  const handleSidebar = () => {
    setOpenSidebar(!openSidebar)
  }
  return (
    <> 
        <Box className={`${openSidebar ? "sidebar-open" : ""}`} sx={{background: "#0F0F0F"}}> 
            <Navbar handleSidebar={handleSidebar}/>
            <Sidebar/>
            <Outlet/>
        </Box>
    </>
  )
}

export default Layout