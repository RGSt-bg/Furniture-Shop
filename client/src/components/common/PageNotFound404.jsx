import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { showModal, hideModal } from "../../app/store.js";

export default function PageNotFound404() {
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state) => state.modal.showModal);
    const hasShown = useRef(false);
    const navigate = useNavigate();

        useEffect(() => {
            if (!hasShown.current && !isModalOpen) {
                dispatch(showModal());
                hasShown.current = true;
            }
        }, [dispatch, isModalOpen]);

        const handleClose = () => {
            dispatch(hideModal());
            navigate("/");
        };
        
        if (!isModalOpen) return null;

    return (
        <div className="overlay">
            <div className="backdrop" onClick={handleClose}></div>
            <div className="modal">
                <div className="detail-container">
                    <header className="headers">
                        <img src="/images/404-Error.png" />
                        <span>Page Not Found</span>
                        <p className="btn close" onClick={handleClose}>X</p>
                    </header>
                    <div className="content">
                        <section id="errorPage">
                            <h4>Don't worry! It's just a 404 Error!</h4>
                        </section>
                    </div>
                    <div className="btn-container">
                        <button className="btn close" onClick={handleClose}>OK</button>
                    </div>
                </div>
            </div>
        </div>
    );
}