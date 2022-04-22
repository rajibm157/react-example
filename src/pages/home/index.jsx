import { Navbar, Header } from "../../components";
import Homes from "./home";

function Home() {
  return (
    <>
      <div id="wrapper">
        <Navbar />
        <Header>
          <Homes />
        </Header>
      </div>
    </>
  );
}

export default Home;
