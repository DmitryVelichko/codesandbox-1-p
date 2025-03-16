import React from 'react'
import classes from './ModalWindow.module.css'

const ModalWindow = ({ visible, setVisible }) => {

    const rootClasses = [classes.modalWindow]

    if (visible) {
        rootClasses.push(classes.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)} >
            <div className={classes.modalWindowContent}>
                <h3 className={classes.modalWindowContent}>Email sent successfully!<br />
                    Thank you 😃
                </h3>

            </div>
        </div>
    )
}

export default ModalWindow