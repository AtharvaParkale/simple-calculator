import { Box, width } from "@mui/system";
import "./App.css";
import Stack from "@mui/material/Stack";
import img1 from "./illustration.jpg";
import Calculator from "awesome-react-calculator";

function App() {
  return (
    <>
      <Stack
        sx={{
          // border: "2px solid black",
          width: "100%",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          sx={{
            // border: "2px solid black",
            width: { xs: "95%", sm: "65%" },
            height: { xs: "95%", sm: "85%" },
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "2px 2px 20px rgb(255 253 253), 0 1px 10px",
          }}
        >
          <Box
            sx={{
              // border: "2px solid black",
              width: "90%",
              height: "15%",
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              color: "#44475b"
            }}
          >
            <h2>Simple calculator</h2>
          </Box>

          <Stack
            sx={{
              // border: "2px solid black",
              width: "90%",
              height: "85%",
              alignItems: "center",
              justifyContent: "space-evenly",
              flexDirection: { xs: "col", sm: "row" },
            }}
          >
            <Box
              sx={{
                // border: "2px solid black",
                width:  { xs: "95%", sm: '45%' },
                height: "85%",
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
              }}
            >
              <Calculator />
            </Box>

            <Box
              sx={{
                // border: "2px solid black",
                width: "47%",
                height: "85%",
                display: { xs: "none", sm: "block" },
                alignItems: "center",
                justifyContent: "start",
              }}
              className="image-holder"
            >
              <img src={img1} alt="Illustration" />
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default App;