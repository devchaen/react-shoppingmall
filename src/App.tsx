import "./App.css";
import { Outlet, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import ProductDetail from "./pages/ProductDetail";
import MyCart from "./pages/MyCart";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { useSelector } from "react-redux";

const Layout = (currentUser) => {
  return (
    <div>
      <Header currentUser={currentUser} />

      <Outlet />
    </div>
  );
};

function App() {
  const currentUser = useSelector((state) => state.user[0]);

  return (
    <div className="App">
      {/* Routes = 중첩 라우팅 가능 */}
      <Routes>
        <Route path="/" element={<Layout currentUser={currentUser} />}>
          <Route index element={<MainPage />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<MyCart />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>
        <Route path="*">404 Not Found</Route>
      </Routes>
    </div>
  );
}

export default App;
