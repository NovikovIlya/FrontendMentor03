import ItemList from "../components/ItemList/ItemList";
import InputComponent from "../components/InputComponent/InputComponent";
import styles from "./MainPage.module.css";
import Header from "../components/Header/Header";
import MainSection from "../components/MainSection/MainSection";
import Statics from "../components/Statistics/Statics";
import Footer from "../components/Footer/Footer";
import Bottom from "../components/Bottom/Bottom";

function MainPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        <MainSection />
        <InputComponent />
        <ItemList />
        <Statics />
      </div>
      <Footer />
      <Bottom />
    </div>
  );
}

export default MainPage;
