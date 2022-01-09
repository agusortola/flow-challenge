import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react'
import { useState } from 'react'

function ErrorModal({setModalIsOpen, error}) {
  const [isOpen, setIsOpen] = useState(true)
  const onClose = () => {
    setIsOpen(false)
    setModalIsOpen(false)
  }

  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Oops! Something went wrong...
            </AlertDialogHeader>
            <AlertDialogBody>
              Try again later...
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button onClick={onClose} justifySelf='center'>
                Close
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default ErrorModal;
