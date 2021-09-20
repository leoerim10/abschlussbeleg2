import { Button } from "@chakra-ui/button"
const MyButton = (props) => {
    return (
        <Button onClick={props.doClickAction}
        bg={props.bgColor}
        color={props.color}
        _hover={{
          bg: props.hoverColor
        }}>
        {props.name}
      </Button>
    )
}
MyButton.defaultProps = {
  color: "white",
  bgColor: "blue.400",
  hoverColor: "blue.500"
}

export default MyButton
