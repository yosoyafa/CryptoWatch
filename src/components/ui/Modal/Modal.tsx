import React, { ReactNode } from 'react'
import { Text, View } from 'react-native'
import RNModal from 'react-native-modal'
import styles from './styles'

interface ModalProps {
  isVisible: boolean
  title?: string
  children: ReactNode
  onClose: () => void
}

/**
 * The `Modal` component is a TypeScript React component that renders a modal with a title and
 * children, and can be shown or hidden based on the `isVisible` prop.
 * @param {ModalProps}  - - `children`: The content to be displayed inside the modal.
 * @returns The Modal component is being returned.
 */
const Modal = ({
  children,
  title,
  isVisible,
  onClose,
}: ModalProps) => {
  return (
    <RNModal
      isVisible={isVisible}
      onBackdropPress={onClose}
      useNativeDriverForBackdrop
      testID="modal"
    >
      <View style={[styles.main]}>
        {title && <Text style={[styles.title]}>{title}</Text>}
        {children}
      </View>
    </RNModal>
  )
}

export default Modal
