import { ThemeProvider } from "@mui/material/styles";
import { RouterProvider } from "react-router-dom";
import router from "../router/Router";
import theme from "../styles/Theme.js";
const App = () => {
  return(
    <> 
      <ThemeProvider theme={theme}> 
        <RouterProvider router={router}/>
      </ThemeProvider>
    </>
  )
}
export default App;



// TODO: *. Maybe work with time like history make 3 hours ago
// TODO: *. Add Search