import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react'
import { createPortal } from 'react-dom'

type HideModal = () => void

type CreateModal = (hideModal: HideModal) => ReactNode

type ShowModal = (createModal: CreateModal) => HideModal

const ModalContext = createContext<ShowModal>(() => () => {})

export const useModal = () => {
  const showModal = useContext(ModalContext)

  return showModal
}

const emptyModelCreator = (): ReactNode => null

const useModalHandlers = (
  setModalCreator: (createModal: CreateModal) => void,
) => {
  return {
    showModal: useCallback(
      (createModal: CreateModal) => {
        setModalCreator(() => createModal)

        return () => {
          setModalCreator(() => emptyModelCreator)
        }
      },
      [setModalCreator],
    ),
    hideModal: useCallback(() => {
      setModalCreator(() => emptyModelCreator)
    }, [setModalCreator]),
  }
}

const modalRoot = document.getElementById('modal-root')

interface Props {
  children: ReactNode
}

const ModalProvider = ({ children }: Props) => {
  const [createModal, setModalCreator] = useState<CreateModal>(
    () => emptyModelCreator,
  )
  const { showModal, hideModal } = useModalHandlers(setModalCreator)
  const modal = createModal(hideModal)

  return (
    <ModalContext.Provider value={showModal}>
      {children}
      {!!modal && !!modalRoot && createPortal(modal, modalRoot)}
    </ModalContext.Provider>
  )
}

export default ModalProvider
