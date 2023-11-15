import { createTheme } from "@mui/material";

const theme = createTheme({
    components: {
        boxStyle: {
            xs: {
                width: "100%",
                padding: "20px 10px",
                marginTop: "60px"
            },
            md: {
                width: "90%",
                margin: "80px auto 0px auto",
                padding: "20px 40px" 
            }
        },
        playerBox: {
            xs: {
                marginTop: "80px",
                padding: "0px 5px"
            },
            sm: {
                marginTop: "80px",
                padding: "20px"
            }
        },
        pageHeading: {
            xs: {
                color: "#fff", 
                fontWeight: 'bold', 
                fontSize: "1.2rem",
            },
            sm: {
                color: "#fff", 
                fontWeight: 'bold', 
                fontSize: "2.2rem"
            }
        },
        navBarButton: {
            xs: {
                fontSize: ".8rem"
            },
            sm:{
                fontSize: "1rem"
            }
        },
        historyImgWidth: {
            xs: {
                width: "120px"
            },
            sm: {
                width: "200px"
            }
        },
        historyItem: {
            xs: {
                margin: "20px 0px",
            }
        },
        historyTitle: {
            xs: {
                fontSize: ".8rem",
            },
            sm: {
                fontSize: ".9rem",
            },
            md: {
                fontSize: "1.2rem",
            }
        },
        channelTitle: {
            xs: {
                fontSize: ".5rem",
            },
            sm: {
                fontSize: ".7rem",
            }
        },
        historyDescription: {
            xs: {
                display: "none"
            },
            sm: {
                fontSize: ".7rem",
            }
        },
        playlistCardImageHeight: {
            xs: {
                height: "auto"
            },
            md: {
                height: "150px"
            },
            lg: {
                height: "180px"
            },
            xl: {
                height: "auto"
            }
        },
        playlistBox: {
            xs: {
                width: "100%",
                padding: "0px",
                marginTop: "60px"
            },
            md: {
                width: "100%",
                margin: "80px auto 0px auto",
                padding: "0px 20px" 
            }
        },
        plThumbnailImage:{
            xs: {
                width: "300px",
                height: "180px",
                margin: "40px auto 0px auto", 
                borderRadius: "15px"
            },
            md: {
                width: "100%",
                padding: "20px",
                borderRadius: "35px",
                height: "auto"
            }
        },
        plItemsTitleLength: {
            xs: 30,
            sm: 50
        },
        playlistLeftSidebarHeight: {
            xs: "auto",
            md: "100vh"
        },
        playerPagePlWidth: {
            xs: {
                width: "300px"
            },
            sm: {
                width: "500px"
            }
        },
        playerIcon: {
            xs: {
                width: "15px",
                height: "15px"
            },
            sm: {
                width: "20px",
                height: "20px"
            }
        },
        plIconPosition: {
            xs: 145,
            sm: 180
        },
        historyMoreBtn: {
            xs: {
                position: "absolute", 
                top: "8px", 
                right: "125px", 
                zIndex: "1000", 
                color: "white",
                backgroundColor: "transparent!important"
            },
            sm: {
                position: "absolute",
                top: "12px", 
                right: "155px", 
                zIndex: "1000", 
                color: "white",
                backgroundColor: "transparent!important"
            },
            lg: {
                display: "none"
            }
        },
        historyClearBtn: {
            xs: {
              backgroundColor: "#1E1E1E",  
              position: "absolute",
              top: "70px",
              right: "10px",
              zIndex: "1000",
              fontSize: ".9rem", 
              color: "#fff", 
              textTransform: "initial", 
              borderRadius: "25px", 
              padding: "8px 10px",
              '&:hover':{
                backgroundColor: "#3c3c3c"
              }
            },
            lg: {
                display: "none"
            }
        },
        githubIconLink: {
            xs: {
                position: "absolute",
                right: "150px",
                top: "14px",
                zIndex: '1000',
                color: "#fff",
            },
            md: {
                position: "absolute",
                right: "180px",
                top: "15px",
                zIndex: '1000',
                color: "#fff",
                cursor: "pointer"
            }
        },
        githubIcon: {
            xs: {
                fontSize: "1.8rem"
            },
            sm: {
                fontSize: "2rem"
            }
        }
    }
})

export default theme;







/**
 * 
 * {background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)", padding: "15px 10px",borderRadius: "15px", height: "auto", display: playlistStyle}
 */