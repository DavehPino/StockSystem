import styled from "styled-components";
import { HomeLayout } from "./pages/HomeLayout";
import { ProductsPage } from "./pages/ProductsPage";
import "tailwindcss/tailwind.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";



const App = () => {
  return (
    <AppComponent>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeLayout} />
          <Route exact path="/menu" component={ProductsPage} />
        </Switch>
      </BrowserRouter>
    </AppComponent>
  );
};

export default App;

const AppComponent = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#6e6e6e, #818181, #9f9f9f);
`;
