export default function NotificationForm({notices, onClose}) {
    return (
        <div className="overlay">
            <div className="backdrop" onClick={onClose}></div>
            <div className="modal">
                <div className="detail-container">
                    <header className="headers">
                        <h4>{notices.title}</h4>
                        <p className="btn close" onClick={onClose}>X</p>
                    </header>
                    <div className="content">
                        <p>{notices.message}</p>
                    </div>
                    <div className="btn-container">
                        <button className="btn close" onClick={onClose}>OK</button>
                    </div>
                </div>
            </div>
        </div>
    );
}