# sallabdou-modal-react

A simple and basic reusable modal component using react

<a href="https://www.npmjs.com/package/sallabdou-modal-react"><img alt="npm" src="https://img.shields.io/npm/dw/sallabdou-modal-react"></a>
<a href="https://www.npmjs.com/package/sallabdou-modal-react"><img alt="npm" src="https://img.shields.io/npm/v/sallabdou-modal-react"></a>
<a href="https://www.npmjs.com/package/sallabdou-modal-react"><img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/sallabdou-modal-react"></a>
<a href="https://www.npmjs.com/package/sallabdou-modal-react">
<img alt="Maintenance Status" src="https://img.shields.io/badge/maintenance-active-green.svg" />
</a>

## Installation

```
npm install sallabdou-modal-react
```

## Example

Voici un exemple d'implémentation :

```js
import { useState } from 'react'
import Modal from 'sallabdou-modal-react'

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
```