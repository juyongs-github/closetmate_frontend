import Footer from "../layout/Footer";
import Header from "../layout/Header";
import UserHome from "../components/home/UserHome";
import GuestHome from "../components/home/GuestHome";

function Home() {
  return (
    <div>
      <Header />
      <GuestHome />
      <UserHome />
      <Footer />
    </div>
  );
}

export default Home;
