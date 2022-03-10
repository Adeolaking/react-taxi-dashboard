import SideBar from "./components/sideBar";
import Dashboard from './components/dashboard';
import styled from 'styled-components';



const App = ()=>{


  return( 
    <>
      <Div>
        <SideBar/>
        <Dashboard/>
      </Div>
    </>
    )
}

const Div = styled.div`
    display: flex;
`


export default App;