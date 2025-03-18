import React from "react";

/**
 * CSS pour l'arrière-plan de la modale (overlay sombre)
 * @constant {Object}
 */
const modalOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
};

/**
 * CSS pour le contenu de la modale
 * @constant {Object}
 */
const modalStyle = {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    width: "90%",
    maxWidth: "500px",
};

/**
 * CSS pour le bouton de fermeture
 * @constant {Object}
 */
const buttonStyle = {
    marginTop: "10px",
    padding: "8px 16px",
    backgroundColor: "#cdcdcd",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
};

/**
 * Composant Modal permettant d'afficher une boîte de dialogue.
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {boolean} props.isOpen - Indique si la modale est ouverte.
 * @param {Function} props.onClose - Fonction appelée pour fermer la modale.
 * @param {React.ReactNode} props.children - Contenu affiché à l'intérieur de la modale.
 * @returns {JSX.Element | null} La modale si `isOpen` est `true`, sinon `null`.
 */
const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    // Si la modale n'est pas ouverte, ne retourne rien (null)


    return (
        <div style={modalOverlayStyle}>
            <div style={modalStyle}>
                <div style={{ textAlign: "center" }}>
                    {children}
                    <button style={buttonStyle} onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;