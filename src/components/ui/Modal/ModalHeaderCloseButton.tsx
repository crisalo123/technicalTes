import { CloseButton } from '../CloseButton'

export interface ModalHeaderCloseButtonProps {
  onClose: () => void
  className?: string
}

export const ModalHeaderCloseButton: React.FC<ModalHeaderCloseButtonProps> = ({
  onClose,
  className
}) => {
  return <CloseButton className={className} onClick={onClose} />
}
