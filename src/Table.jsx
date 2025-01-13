// src/Table.jsx

import './Table.css'
import {useState, useEffect} from 'react';
import TableRowNumber from './TableRowNumber.jsx'

function Table({onColumnSumsChange, jsonData}) {

    const defaultNames = jsonData.length >= 4 ? [jsonData[0]?.name, jsonData[1]?.name, jsonData[2]?.name, jsonData[3]?.name] : ['', '', '', ''];
    const [names, setNames] = useState(defaultNames);
    
    const [favTriggers, setFavTriggers] = useState([0, 0, 0, 0]);
    const [rotsPerBurst, setRotsPerBurst] = useState([1, 1, 1, 1]);

    const handleNameChange = (index, value) => {
        const newNames = [...names]
        newNames[index] = value;
        setNames(newNames);
    }
    
    const handleFavTriggersChange = (index, value) => {
        const newValues = [...favTriggers];
        newValues[index] = value;
        setFavTriggers(newValues);
    }
    
    const handleRotsPerBurstChange = (index, value) => {
        const newValues = [...rotsPerBurst];
        newValues[index] = value;
        setRotsPerBurst(newValues);
    }

    useEffect(() => {
        const columnSums = favTriggers.map((value, index) => parseFloat(value) + parseFloat(rotsPerBurst[index]));
        onColumnSumsChange(columnSums);
    }, [favTriggers, rotsPerBurst, onColumnSumsChange]);

    useEffect(() => {
        if (jsonData.length >= 4) {
            setNames([jsonData[0].name, jsonData[1].name, jsonData[2].name, jsonData[3].name]);
        }  else {
            setNames(jsonData.map(item => item.name).concat(Array(4 - jsonData.length).fill('')));
        }
    }, [jsonData])

    return (
        <div id='Table'>
            <div id='NameDiv'>
                <label>Select Row:</label>
                {names.map((value, index) => (
                    <select
                        key = {index}
                        value = {value}
                        onChange = {(e) => handleNameChange(index, e.target.value)}
                    >
                        {jsonData.map((item, idx) => (
                            <option key={idx} value={item.name}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                ))}
            </div>
            <TableRowNumber
                label = "Favonius Triggers per Rotation"
                values = {favTriggers}
                onChange = {handleFavTriggersChange}
            />
            <TableRowNumber
                label = "Number of Rotations between Bursts"
                values = {rotsPerBurst}
                onChange = {handleRotsPerBurstChange}
            />
        </div>
    )
}

export default Table