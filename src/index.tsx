import React, { ReactNode, useEffect } from 'react';
import './responsive-modal.css';

interface ModalProps {
  children: ReactNode;
  isVisible: boolean;
  width?: string;
  height?: string;
  onClose: () => void;
  scroll?: boolean;
  header?: React.ReactElement<{ onClose?: () => void }>;
  wrapperClassName?: string;
  contentClassName?: string;
  bodyClassName?: string;
}

const Modal: React.FC<ModalProps> = ({
  children,
  isVisible,
  width,
  height,
  onClose,
  scroll = false,
  wrapperClassName,
  contentClassName,
  bodyClassName,
  header,
}) => {
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isVisible]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (isVisible && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isVisible && (
        <div className={`responsive-modal-wrapper ${wrapperClassName}`} onClick={handleOverlayClick}>
          <div className={`responsive-modal-content ${contentClassName}`} style={{ width, height }}>
            {header && (
                React.cloneElement(header, { onClose })
            )}
            <div className={`responsive-modal-body ${bodyClassName}`} style={{ overflowY: scroll ? 'auto' : 'hidden' }}>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
