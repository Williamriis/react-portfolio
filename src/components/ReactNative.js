import React from 'react'
import Modal from 'react-bootstrap/Modal'


export const ReactNative = ({ show, setShow }) => {

    const handleClose = () => {
        setShow(false)
    }

    return (

        <Modal
            show={show}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            top={0}
        >
            <Modal.Header closeButton>
                <Modal.Title >
                    Modal heading
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
          </p>
            </Modal.Body>
        </Modal>

    )
}