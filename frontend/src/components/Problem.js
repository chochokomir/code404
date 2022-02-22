import {
    Box,
    Button,
    CssBaseline,
    Divider,
    Paper,
    Typography,
  } from "@mui/material";
  import React from "react";
  import "codemirror/lib/codemirror.css";
  import "codemirror/mode/xml/xml";
  import "codemirror/mode/javascript/javascript";
  import "codemirror/mode/css/css";
  import "codemirror/theme/paraiso-light.css";
  import "codemirror/theme/paraiso-dark.css";
  import "codemirror/keymap/sublime";
  import "./Problem.css";
  import { Controlled as CodeMirror } from "react-codemirror2";
  
  const Problem = () => {
    const [code, setCode] = React.useState();
    const handleSubmit = () =>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"code":code})
          };
          fetch('/api/compiler/Примерна', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
          };
  
    function Explanation() {
      return (
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" sx={{ mb: "10px" }}>
            Example Title
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus
            fermentum justo, sit amet aliquam ex dictum sed. Mauris quis nunc eget
            tellus tincidunt feugiat. Cras scelerisque dapibus arcu, eu lacinia
            elit. Suspendisse eu faucibus ex. Quisque at mi at turpis scelerisque
            varius id ac urna. Aenean sit amet molestie odio.
          </Typography>
          <Paper
            variant="outlined"
            elevation={8}
            sx={{ display: "flex", width: "100%", p: 2 }}
          ></Paper>
        </Box>
      );
    }
  
    return (
      <>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexFlow: { xs: "column wrap", md: "row nowrap" },
            width: "100%",
            minHeight: "40vh",
            p: 2,
            justifyContent: "space-around",
            gap: "10px",
            alignItems: "stretch",
          }}
        >
          <Paper
            variant="outlined"
            elevation={8}
            sx={{ display: "flex", width: "100%", mb: "10px", p: 2 }}
          >
            <Explanation />
          </Paper>
          <Paper
            variant="outlined"
            elevation={8}
            sx={{
              display: "block",
              width: "100%",
              maxWidth: "100%",
              overflow: "hidden",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <CodeMirror
                className="code-editor"
                value={code}
                options={{
                  mode: "javascript",
                  theme: "paraiso-dark",
                  lineNumbers: true,
                  readOnly: false,
                  lineWrapping: true,
                  keyMap: "sublime",
                }}
                onBeforeChange={(editor, data, value) => {
                  setCode(value);
                }}
              />
            </Box>
            <Divider />
            <Button onClick={handleSubmit}>kur za</Button>
            <Box sx={{ p: 2 }}>
              <Paper
                variant="outlined"
                elevation={8}
                sx={{ display: "flex", width: "100%", p: 2 }}
              >
                TODO output
              </Paper>
            </Box>
          </Paper>
        </Box>
      </>
    );
  };
  
  export default Problem;
       
        