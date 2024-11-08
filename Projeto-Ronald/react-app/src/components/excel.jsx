import React, { useState } from 'react';
import { OutTable, ExcelRenderer } from 'react-excel-renderer';
import './styles/excel.css'

function Excel() {
    // State hooks for storing columns and rows
    const [cols, setCols] = useState([]);
    const [rows, setRows] = useState([]);

    // Handler function for file input
    const fileHandler = (e) => {
        const fileObj = e.target.files[0];

        // Use the ExcelRenderer to parse the file
        ExcelRenderer(fileObj, (err, resp) => {
            if (err) {
                console.log(err);
            } else {
                // Update state with the parsed data
                setCols(resp.cols);
                setRows(resp.rows);
            }
        });
    };

    return (
        <>
            <input type="file" onChange={fileHandler} style={{ padding: "10px" }} />
            
            <OutTable 
                data={rows} 
                columns={cols} 
                tableClassName="ExcelTable2007" 
                tableHeaderRowClass="heading" 
            />
        </>
    );
}

export default Excel;