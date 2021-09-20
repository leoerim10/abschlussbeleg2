import { Checkbox } from "@chakra-ui/react";
import LoginForm2 from "./Loginform";
import Header2 from "./Header"

const Home = () => {

  return (
      <div>

      <div className='container'>
        <Header2 title="AdViz"/>
        
        <LoginForm2 prompt="Log in" checkbox={
          <div>
            <Checkbox> Remember Me</Checkbox>
          </div>
        }/>
      </div>

      </div>

  );
}

export default Home