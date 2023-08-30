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
