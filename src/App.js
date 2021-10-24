import styled from "styled-components";
import { HomeLayout } from "./pages/HomeLayout";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <AppComponent>
      <HomeLayout></HomeLayout>
    </AppComponent>
  );
}

export default App;

const AppComponent = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#6e6e6e, #818181, #9f9f9f);
`;
