import Banner from "./components/Banner";
import ProductCard from "./components/ProductCard";
import Header from "./components/Header";

function App() {

  return (
    <>
    <Banner/>
    <div className="mr-[136px] ml-[136px]">
    <Header />
    <ProductCard />
    </div>
    </>
  );
}

export default App;
