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
            <h1 className="title">Thra Basic Modal React</h1>
            <form onSubmit={handleSubmit}>
                <button>Click me</button>
            </form>
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <p>Employee created successfully!</p>
            </Modal>
        </section>
    )
}

export default App