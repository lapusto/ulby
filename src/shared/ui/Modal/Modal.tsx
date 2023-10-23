import { FC, ReactNode } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Modal: FC<ModalProps> = ({
    className, children, isOpen, onClose,
}) => {
    const closeHandler = () => {
        if (onClose) {
            onClose();
        }
    };

    const onContentClick = (e: { stopPropagation: () => void; }) => {
        e.stopPropagation();
    };
    return (
        <div className={cn(cls.Modal, { [cls.opened]: isOpen }, [className])}>
            <div className={cls.overlay} onClick={closeHandler}>
                <div className={cls.content} onClick={onContentClick}>
                    {children}
                </div>
            </div>
        </div>
    );
};
