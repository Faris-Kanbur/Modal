import React from 'react'
import styled from 'styled-components'




const Modal = ({modal, setmodal}) => {
    return (
        <div>

            {modal ? <h1>Modal</h1> : null}
        </div>
    )
}

export default Modal
