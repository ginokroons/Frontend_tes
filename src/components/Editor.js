import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
// import { loadLanguage, langs }  from '@uiw/codemirror-extensions-langs'
import { langs } from '@uiw/codemirror-extensions-langs';

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

function Editor() {
    return <CodeMirror onChange={(event) => console.log(event)} height="200px" extensions={[langs.dockerfile()]} />;
}



export default Editor;