import Header from "../layout/Header";
import Footer from "../layout/Footer";
import SummarySection from "../components/profile/SummarySection";
import MyActivitySection from "../components/profile/MyActivitySection";
import PreferStyleSection from "../components/profile/PreferStyleSection";
import PreferColorSection from "../components/profile/PreferColorSection";
import BasicInfoSection from "../components/profile/BasicInfoSection";

function Profile() {
  return (
    <div className="bg-gray-300">
      <Header />
      <div className="flex flex-col gap-10 pb-16 mx-10 md:mx-20 pt-36">
        <SummarySection />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <MyActivitySection />
          <BasicInfoSection />
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <PreferStyleSection />
          <PreferColorSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
