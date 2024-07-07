import React from 'react';
import {Qrcontext} from"../context/Qrcontext"
import { useContext } from 'react';
import "./reset.css"

function Displayqr(props) {
    let {qrcode,reset} = useContext(Qrcontext)
    return (
        <div className='page2'>
            <div>
                <img className='qrcode' src={qrcode} alt="" />
            </div>
            <div>
                <input className='reset' type="button" value="reset" onClick={reset} />
            </div>
            
        </div>
    );
}

export default Displayqr;