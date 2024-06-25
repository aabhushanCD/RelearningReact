import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
function ResponsiveAppBar() {
  const navigate = useNavigate();

  function handleClick(path) {
    navigate(`/${path}`);
  }

  return (
    <AppBar position="static" color="success">
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            onClick={() => handleClick("")}
          >
            Logo
          </Typography>

          <Box sx={{ display: "flex" }}>
            <Button
              variant="h6"
              component="div"
              onClick={() => handleClick("game")}
            >
              Game
            </Button>
            <Button
              variant="h6"
              component="div"
              onClick={() => handleClick("Video")}
            >
              Video
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default ResponsiveAppBar;
