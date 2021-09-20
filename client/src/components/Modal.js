import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button, FormControl, FormLabel, Input, useDisclosure
  } from "@chakra-ui/react"
  import React from 'react';
  import ContactForm from "./ConactForm";

  const saveContact = () => {
    console.log("button is working")
  }

  const MyModal = (props) => {

  function InitialFocus() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef()
    const finalRef = React.useRef()
  
    return (
      <>
        <Button onClick={onOpen}>{props.title}</Button>
        
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{props.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              {props.modalContent}
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={saveContact}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  return InitialFocus();
  }

  export default MyModal