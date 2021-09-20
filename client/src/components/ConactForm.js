
import { FormControl, FormLabel, Input, Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import "axios";
import axios from "axios";

const ContactForm = (props) => {

  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [street, setStreet] = useState("")
  const [housenumber, setHousenumber] = useState(0)
  const [postalcode, setPostalcode] = useState(0)
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")

  useEffect(() => {
    axios.get(`http://localhost:3001/contact/${props.contact_id}`)
      .then((response) => {
        console.log(response.data);
        setFirstname(response.data.firstname);
        setLastname(response.data.lastname);
        setStreet(response.data.street);
        setHousenumber(response.data.housenumber);
        setPostalcode(response.data.postalcode);
        setCity(response.data.city);
        setCountry(response.data.country);
      }, (err) => {
        console.log(err);
        
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let payload = {
      "firstname": firstname,
      "lastname": lastname,
      "street": street,
      "housenumber": housenumber,
      "postalcode": postalcode,
      "city": city,
      "country": country,
    };

    console.log(payload);

    axios.post("http://localhost:3001/contacts", payload)
      .then((response) => {
        console.log(response);
      }, (err) => {
        console.log(err);
      });

      // close the modal / redirect (?)
  };

return(
<form onSubmit={handleSubmit}>
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

</form>)
}
              
export default ContactForm