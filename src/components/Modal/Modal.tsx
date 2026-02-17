import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { styled } from "styled-components";

type ModalType = "modal" | "sidepanel";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  type: ModalType;
  children: React.ReactNode;
  closeOnOverlayClick?: boolean;
};

const Overlay = styled.div<{ type: ModalType }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  z-index: 100;
  justify-content: ${({ type }) => (type === "modal" ? "center" : "flex-end")};
  align-items: ${({ type }) => (type === "modal" ? "center" : "flex-start")};
`;

const ModalContent = styled.div`
  background-color: #ffffff;
`;

const Modal: React.FC<ModalProps> = ({
  isOpen,
  type,
  children,
  closeOnOverlayClick = true,
  onClose,
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Блокировка скролла при открытом модальном окне
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    console.log(e.target);
    if (closeOnOverlayClick && e.target === overlayRef.current) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Overlay type={type} ref={overlayRef} onClick={handleOverlayClick}>
      <ModalContent>
        <button onClick={onClose}>Закрыть модальное окно</button>
        {children}
      </ModalContent>
    </Overlay>,
    document.body
  );
};

export default Modal;
