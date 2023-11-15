import { useTheme } from "@emotion/react";
import useMediaQuery from "@mui/material/useMediaQuery";
// Your object name must be in componets of createTheme
const useResponsiveValue = (objectName) => {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.up("xs"));
    const isSm = useMediaQuery(theme.breakpoints.up("sm"));
    const isMd = useMediaQuery(theme.breakpoints.up("md"));
    const isLg = useMediaQuery(theme.breakpoints.up("lg"));
    const isXl = useMediaQuery(theme.breakpoints.up("xl"));

    const object = theme.components[objectName];
    let responsiveValue = 
        (isXl && object.xl) ||
        (isLg && object.lg) ||
        (isMd && object.md) ||
        (isSm && object.sm) ||
        (isXs && object.xs);
    
    return responsiveValue;
};

export default useResponsiveValue;
