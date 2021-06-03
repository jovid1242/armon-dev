import React, { useState } from 'react'
import Rodal from 'rodal';

// include styles
import 'rodal/lib/rodal.css';

import './Index.css'

export default function ModalLayouts(props) {
    const [open, setOpen] = useState(
        { visible: false }
    )

    const show = () => {
        setOpen({ visible: true });
    }

    const hide = () => {
        setOpen({ visible: false });
    }


    return (
        <div className="layouts-modal__wrapper">
            <div>
                <button onClick={show.bind()}>show</button>

                <Rodal visible={open.visible} onClose={hide.bind()}>
                    <div>Content</div>
                </Rodal>
            </div>
        </div>
    )
}
