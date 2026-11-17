interface ModalProps {
    title: string;
    children: React.ReactNode;
    onClose: () => void;
}

export function Modal({ title, children, onClose }: ModalProps) {
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>{title}</h2>
                <div>{children}</div>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}