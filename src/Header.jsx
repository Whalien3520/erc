// src/Header.jsx

import './Header.css';
import {useState} from 'react';
import HeaderRowNumber from './HeaderRowNumber.jsx';
import HeaderRowSelect from './HeaderRowSelect.jsx';

const hpParticlesOptions = [
    {label: 'No Particles', value: 0},
    {label: 'Default', value: 1},
    {label: 'Custom', value: 2}
]

const particleRNGOptions = [
    {label: 'Worst Case', value: 0},
    {label: 'Safe', value: 1},
    {label: 'Average', value: 2}
]

const rotationModeOptions = [
    {label: 'Flexible', value: 0},
    {label: 'Fixed', value: 1}
]

function Header() {
    const [clearTime, setClearTime] = useState(90);
    const [hpParticles, setHpParticles] = useState(1);
    const [particleRNG, setParticleRNG] = useState(2);
    const [rotationMode, setRotationMode] = useState(1);
    const [rotLength, setRotLength] = useState(20);

    const numSum = parseFloat(clearTime) + parseFloat(rotLength);
    const selectSum = parseFloat(hpParticles) + parseFloat(particleRNG) + parseFloat(rotationMode);
    const ret = numSum + selectSum;

    return (
        <div id='Header'>
            <HeaderRowNumber label="Clear Time(Seconds):" value={clearTime} onChange={setClearTime} />
            <HeaderRowSelect label="HP Particles:" value={hpParticles} onChange={setHpParticles} options={hpParticlesOptions} />
            <HeaderRowSelect label="Particle RNG:" value={particleRNG} onChange={setParticleRNG} options={particleRNGOptions} />
            <HeaderRowSelect label="Rotation Mode:" value={rotationMode} onChange={setRotationMode} options={rotationModeOptions} />
            <HeaderRowNumber label="Rotation Length:" value={rotLength} onChange={setRotLength} />
        </div>
    )
}

export default Header

/*function Header() {
    return (
        <header className="header">
            <table>
                <tbody>
                    <tr>
                        <th className='label'><p>Clear Time (Seconds)</p></th>
                        <td className='field'><input type="numer" /></td>
                    </tr>
                    <tr>
                        <th className='label' ><p>Enemy HP Particles</p></th>
                        <td className='field'>
                            <select>
                                <option value="Default">Default</option>
                                <option value="No Particles">No Particles</option>
                                <option value="Custom">Custom</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th className='label'><p>Particle RNG</p></th>
                        <td className='field'>
                            <select>
                                <option value="Average">Average</option>
                                <option value="Worst Case">Worst Case</option>
                                <option value="Safe">Safe</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th className='label'><p>Rotation Mode</p></th>
                        <td className='field'>
                            <select>
                                <option value="Fixed">Fixed</option>
                                <option value="Flexibl">Flexible</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th className='label'><p>Rotation Length</p></th>
                        <td className='field'><input type="numer" /></td>
                    </tr>
                </tbody>
            </table>
        </ header>
    )
}*/