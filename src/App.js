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
  background-color: grey;
`;
