
import { FormControl, FormLabel, Input, Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react"
import { useState } from "react"

const ContactForm = (props) => {

  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [street, setStreet] = useState("")
  const [housenumber, setHousenumber] = useState(0)
  const [postalcode, setPostalcode] = useState(0)
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")

return(
<div>
            <FormControl>
                <FormLabel>First name</FormLabel>
                <Input placeholder="First name" onChange={(event) => {setFirstname(event.target.value)}} />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Last name</FormLabel>
                <Input placeholder="Last name" onChange={(event) => {setLastname(event.target.value)}} />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Street</FormLabel>
                <Input placeholder="Street" onChange={(event) => {setStreet(event.target.value)}} />
              </FormControl>
              
              <FormControl mt={4}>
                <FormLabel>House number</FormLabel>
                <Input placeholder="House number" onChange={(event) => {setHousenumber(event.target.value)}} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Postal code</FormLabel>
                <Input placeholder="Postal code" onChange={(event) => {setPostalcode(event.target.value)}} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>City</FormLabel>
                <Input placeholder="City" onChange={(event) => {setCity(event.target.value)}} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Country</FormLabel>
                <Input placeholder="Country" onChange={(event) => {setCountry(event.target.value)}} />
              </FormControl>

              <Stack spacing={20} direction="row">
              <Checkbox colorScheme="red" defaultIsChecked>
                Admina
              </Checkbox>
              <Checkbox colorScheme="green" defaultIsChecked>
                private
              </Checkbox>
              </Stack>

</div>)
}
              
export default ContactForm