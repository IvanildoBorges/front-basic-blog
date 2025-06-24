import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

const LayoutDefault = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Nav />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default LayoutDefault;
