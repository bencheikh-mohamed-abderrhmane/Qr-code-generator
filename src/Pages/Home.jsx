import React, { useContext } from 'react';
import Createqr from '../componates/Createqr';
import Displayqr from '../componates/Displayqr';
import { Qrcontext } from '../context/Qrcontext';

function Home(props) {
    let {qrcode} = useContext(Qrcontext)
    return (
        <div>{ qrcode ?
            <Displayqr />
            :
        <Createqr />}
            
        </div>
        )
}

export default Home;