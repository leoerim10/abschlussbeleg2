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

const MyModal = (props) => {

  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [street, setStreet] = useState("")
  const [plz, setPlz] = useState("")
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
  const [owner, setOwner] = useState("")
  const [privacy, setPrivacy] = useState("")

  /* const [contactList, setContactList] = useState([])

  useEffect (() =>{
    Axios.get("http://localhost:3001/read").then((Response) => {
      setContactList(Response.data)
    })
  }, []) */

  const addContact = () => {

    const params = {
        access_key: api_key,
        query: street + " " + plz + " " + city + " "+ country
      }
     function saveinDB(){

      return new Promise(resolve => {
       Axios.get('http://api.positionstack.com/v1/forward', {params})
        .then(response => {
          
            const latfromreq = (response.data.data)[0]?.latitude
            const longfromreq = (response.data.data)[0]?.longitude
            ///long = response.data[0].longitude
            const result = {"lat":latfromreq, "long":longfromreq}
            resolve(result)
        
        }).catch(error => {
          console.log(error);
          return error
        });

      });

      }
    async function postData() {
      const result =  await saveinDB()
      console.log("from postdata")
      console.log(result)

      Axios.post("http://localhost:3001/create", {
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
    postData()

  }
  

function InitialFocus() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef()
  const finalRef = React.useRef()

  return (

    <><Button onClick={onOpen}>{props.title}</Button><>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a new contact</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          <FormControl isRequired>
                <FormLabel>First name</FormLabel>
                <Input placeholder="First name" onChange={(event) => {setFirstname(event.target.value)}} />
              </FormControl>
  
              <FormControl mt={4} isRequired>
                <FormLabel>Last name</FormLabel>
                <Input placeholder="Last name" onChange={(event) => {setLastname(event.target.value)}} />
              </FormControl>
              <FormControl mt={4} isRequired>
                <FormLabel>Street</FormLabel>
                <Input placeholder="Street" onChange={(event) => {setStreet(event.target.value)}} />
              </FormControl>
              
              <FormControl mt={4} isRequired>
                <FormLabel>PLZ</FormLabel>
                <Input placeholder="PLZ" onChange={(event) => {setPlz(event.target.value)}} />
              </FormControl>

              <FormControl mt={4} isRequired>
                <FormLabel>City</FormLabel>
                <Input placeholder="City" onChange={(event) => {setCity(event.target.value)}} />
              </FormControl>

              <FormControl mt={4} isRequired>
                <FormLabel>Country</FormLabel>
                <Input placeholder="Country" onChange={(event) => {setCountry(event.target.value)}} />
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
            <Button colorScheme="blue" mr={3} onClick={addContact}  >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </></>
  )
}
return InitialFocus();
}

  export default MyModal