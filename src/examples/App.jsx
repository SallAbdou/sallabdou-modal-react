import { useState } from 'react'
import Modal from '../lib'

const App = () => {
    const [showModal, setShowModal] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setShowModal(true)
    }

    return (
        <section className="container">
            <h1 className="title">Cliquez pour ouvrir la modale</h1>
            <form onSubmit={handleSubmit}>
                <button>Click me</button>
            </form>
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <p>Voici la modale!</p>
            </Modal>
        </section>
    )
}

export default App