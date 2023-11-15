import { Typography } from '@mui/material'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
const ErrorPage = () => {

  return (
    <> 
        <Stack color={"white"} justifyContent={"center"} alignItems={"center"} height={"100vh"}> 
            <Typography sx={{fontWeight: "bold"}} variant='h2'>404</Typography>
            <Typography mb={2} sx={{fontWeight: "bold"}} variant='h6'>Page Not Found</Typography>
            <Typography variant='body1'>The page you are looking for doesn't exist or an other error occured. Go to <Link sx={{textDecoration: "none", color: "green", fontWeight: "bold"}} component={RouterLink} to="/">Home Page</Link></Typography>
        </Stack>
    </>
  )
}

export default ErrorPage