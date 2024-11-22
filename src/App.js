import React, {useState, useMemo} from 'react';
import styled from "styled-components";
import bg from './img/bg.jpg'
import {MainLayout} from './styles/layout'
import Orb from './components/orb/orb'
import Navigation from './components/navigation/Navigation'
import Dashboard from './components/Dashboard/Dashboard'
import Income from './components/Incomes/Incomes'
import Expenses from './components/Expenses/Expenses'
import { useGlobalContext } from './context/globalContext';


function App() {
  const [active, setActive] = React.useState(0)

  const global = useGlobalContext();
  console.log(global)

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Income />
      case 4:
        return <Expenses />
      default:
        return <Dashboard />
       
    }
  }

  const orbMemo = useMemo(() => {
    return <Orb />
  },[])

  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout> 
    </AppStyled>   
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  background-size: cover; /* Ensures the image covers the entire background */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Prevents the image from repeating */
  z-index: 1; 
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow: auto;
    overflow-x: hidden;
    &::webkit-scrollbar {
      width: 0;

    }
    
  }
`;

export default App;
