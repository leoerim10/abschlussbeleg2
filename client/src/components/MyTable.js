import MyButton from "./Button"
import MyModal from "./MyModal"
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
  } from "@chakra-ui/react"

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
      <Td>{<MyModal title="Edit" />}</Td>
      <Td>{<MyButton name="Delete" />}</Td>
    </Tr>
    <Tr>
      <Td>Contact2</Td>
      <Td>Address2</Td>
      <Td>{<MyModal title="Edit"/>}</Td>
      <Td>{<MyButton name="Delete" />}</Td>
    </Tr>
    <Tr>
      <Td>Contact3</Td>
      <Td>Address3</Td>
      <Td>{<MyModal title="Edit" />}</Td>
      <Td>{<MyButton name="Delete" />}</Td>
    </Tr>
    <Tr>
      <Td>Contact4</Td>
      <Td>Address4</Td>
      <Td>{<MyModal title="Edit" />}</Td>
      <Td>{<MyButton name="Delete" />}</Td>
    </Tr>
  </Tbody>

  <Tfoot>
  </Tfoot>
</Table>

    )

  }

  export default MyTable