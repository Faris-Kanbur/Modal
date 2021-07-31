import React, {useState} from "react";
import styled  from "styled-components";
import Modal from "./components/Modal";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f2f999;
`

const Button = styled.button `
min-width: 100px;
padding: 16px 32px;
border-radius: 4px;
border: none;
background: #141414;
color: #fff;
font-size: 24px;
cursor: pointer;
`



function App() {
  const [modal, setmodal] = useState(false)

  const ModalChange = () => {
    setmodal(modal => !modal)
  }
  return (
    <>
    <Container>
      <Button onClick={ModalChange}>I'm a modal</Button>
      <Modal modal={modal} setmodal={setmodal}/>
    </Container>
    </>
  );
}

export default App;
