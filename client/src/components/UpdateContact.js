import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button, FormControl, FormLabel, Input, useDisclosure, Stack, Checkbox, Radio, RadioGroup
  } from "@chakra-ui/react"
  import React, {useState, useEffect} from 'react';
  import Axios from 'axios'

  const api_key= "6d455699c2050234914be8812b928706"

  const UpdateContact = (props) =>{

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [street, setStreet] = useState("")
    const [plz, setPlz] = useState("")
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [owner, setOwner] = useState("")
    const [privacy, setPrivacy] = useState("")


    const [contactList, setContactList] = useState([])
   
    useEffect (() =>{
      Axios.get("http://localhost:3001/read").then((Response) => {
        setContactList(Response.data)       
      })
    }, [])


    const updateContact = (id) => {

      const params = {
        access_key: api_key,
        query: street + " " + plz + " " + city + " "+ country
      }

      function updateDB(){
        return new Promise(resolve => {
         Axios.get('http://api.positionstack.com/v1/forward', {params})
          .then(response => {
              const latfromreq = (response.data.data)[0]?.latitude
              const longfromreq = (response.data.data)[0]?.longitude
              const result = {"lat":latfromreq, "long":longfromreq}
              resolve(result)
          
          }).catch(error => {
            console.log(error);
            return error
          });
        });
      }

      async function updateData() {
        const result =  await updateDB()

      Axios.put("http://localhost:3001/update", {
        id:id,
      firstname: firstname,
      lastname: lastname,
      street: street,
      plz:plz,
      city: city,
      country: country,
      owner: owner,
      privacy: privacy,
      lat: result.lat,
      long: result.long
    } )
    window.location.reload(false)
  }
   updateData()

  }
      
    function InitialFocus() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef()
    const finalRef = React.useRef()
  
    return (
      <div id="test">
      <Button onClick={onOpen}>{props.title}</Button>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update your contact</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
            <FormControl>
                <FormLabel>First name</FormLabel>
                <Input placeholder="Type here to update your first name" onChange={(event) => {setFirstname(event.target.value)}} />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Last name</FormLabel>
                <Input placeholder="Type here to update your last name" onChange={(event) => {setLastname(event.target.value)}} />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Street</FormLabel>
                <Input placeholder="Type here to update your street" onChange={(event) => {setStreet(event.target.value)}} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>PLZ</FormLabel>
                <Input placeholder="Type here to update your postal code" onChange={(event) => {setPlz(event.target.value)}} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>City</FormLabel>
                <Input placeholder="Type here to update your city" onChange={(event) => {setCity(event.target.value)}} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Country</FormLabel>
                <Input placeholder="Type here to update your country" onChange={(event) => {setCountry(event.target.value)}} />
              </FormControl>

              <Stack spacing={20} direction="row">
              <RadioGroup defaultValue="2">
              <Stack spacing={5} direction="column">
                <Radio colorScheme="blue" value="admina" onChange={(event) => {setOwner(event.target.value)}}>
                  Admina
                </Radio>
                <Radio colorScheme="yellow" value="normalo" onChange={(event) => {setOwner(event.target.value)}} >
                  Normalo
                </Radio>
              </Stack>
            </RadioGroup>
              
            <RadioGroup defaultValue="2">
              <Stack spacing={5} direction="column">
                <Radio colorScheme="red" value="private"onChange={(event) => {setPrivacy(event.target.value)}}>
                  Private
                </Radio>
                <Radio colorScheme="green" value="public" onChange={(event) => {setPrivacy(event.target.value)}}>
                  Public
                </Radio>
              </Stack>
            </RadioGroup>
              </Stack>
            </ModalBody>
  
            <ModalFooter>
              <Button id="testtesttest" colorScheme="blue" mr={3}  onClick={(e)=> updateContact(props.id)} >
                Update
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    )
  }
  return InitialFocus();
}

export default UpdateContact