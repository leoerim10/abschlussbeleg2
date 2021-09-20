import MyButton from "./Button"
import MyModal from "./Modal"
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
  } from "@chakra-ui/react"
  import ContactForm from "./ConactForm"

  const MyTable = (props) => {
    return(
        <Table variant="striped" colorScheme="teal">
  <Thead>
    <Tr>
      <Th>Name</Th>
      <Th>Address</Th>
      <Th>Edit</Th>
      <Th>Delete</Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr>
      <Td>Contact1</Td>
      <Td>Address1</Td>
      <Td>{<MyModal title="Edit" modalContent={<ContactForm />} />}</Td>
      <Td>{<MyButton name="Delete" />}</Td>
    </Tr>
    <Tr>
      <Td>Contact2</Td>
      <Td>Address2</Td>
      <Td>{<MyModal title="Edit" modalContent={<ContactForm />} />}</Td>
      <Td>{<MyButton name="Delete" />}</Td>
    </Tr>
    <Tr>
      <Td>Contact3</Td>
      <Td>Address3</Td>
      <Td>{<MyModal title="Edit" modalContent={<ContactForm />} />}</Td>
      <Td>{<MyButton name="Delete" />}</Td>
    </Tr>
    <Tr>
      <Td>Contact4</Td>
      <Td>Address4</Td>
      <Td>{<MyModal title="Edit" modalContent={<ContactForm />} />}</Td>
      <Td>{<MyButton name="Delete" />}</Td>
    </Tr>
  </Tbody>

  <Tfoot>
  </Tfoot>
</Table>

    )

  }

  export default MyTable