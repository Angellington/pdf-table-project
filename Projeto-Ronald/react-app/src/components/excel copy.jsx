// import React, { useState, useEffect } from 'react';
// import { OutTable, ExcelRenderer } from 'react-excel-renderer';
// import './styles/excel.css'


// function Excel() {
//     // State hooks for storing columns and rows
//     const [cols, setCols] = useState([]);
//     const [rows, setRows] = useState([]);

//     useEffect(() => {
//         const filePath = '/PLANILHA (1).xlsx'

//         //Fetch para carregar o arquivo
//         fetch(filePath)
//             .then((response) => response.blob())
//             .then((fileObj) => {
//                 ExcelRenderer(fileObj, (err, resp) => {
//                     if(err){
//                         console.log(err);
//                     } else {
//                         setCols(resp.cols);
//                         setRows(resp.rows);
//                     }
//                 })
//             })
//             .catch((err) => console.log("Erro ao carregar o arquivo: ", err));
//     }, []);

//     return (
//         <>
//             <OutTable 
//                 data={rows} 
//                 columns={cols} 
//                 tableClassName="ExcelTable2007" 
//                 tableHeaderRowClass="heading" 
//             />
//         </>
//     );
// }

// export default Excel;