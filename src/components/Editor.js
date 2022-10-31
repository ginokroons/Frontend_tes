import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { langs } from "@uiw/codemirror-extensions-langs";
import { Button, Card, Modal, TextField, Stack } from "@mui/material";
import { Box } from "@mui/system";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};


// function Editor() {
//     const onChange = React.useCallback((value, viewUpdate) => {
//         console.log('value:', value);
//     }, []);
//     return (
//         <CodeMirror
//           value="console.log('hello world!');"
//           height="200px"
//           extensions={[javascript({ jsx: true })]}
//           onChange={onChange}
//         />
//     );
// };

function Editor({open1, handleClose}) {


  const [code, setCode] = useState('');

  const handleChange = (event) => {
    setCode(event);
    console.log(event);
  }

  return (
    <Modal
      open={open1}
      onClose={handleClose}
    >
      <Box
        sx={style}
      >
        <Card sx={{p: 1}}>
          <CodeMirror
            onChange={handleChange}
            height="300px"
            extensions={[langs.dockerfile()]}
          />
          <Stack direction='row' spacing={2} flexGrow={1} sx={{m: 4}}>
            <TextField/>
            <Button variant="contained" type='submit'>Submit</Button>
          </Stack>
        </Card>
      </Box>
    </Modal>
  );
}

export default Editor;
