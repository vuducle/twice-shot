import React from "react";
import logo from "./logo.svg";
import PhotoContextProvider from "./utils/PhotoProvider";
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Header from "./Components/Header";
import Item from "./Components/Item";
import Search from "./Components/Search";
import NotFound from "./Components/NotFound";

function App(props: any) {
  const navigate = useNavigate();
  function handleTwiceSubmit(e: any, history: any, searchInput: string) {
    e.preventDefault();
    e.currentTarget.reset();
    let url: string = `/search/${searchInput}`;
    navigate(url);
  }

  return (
    <div className="App">
      <PhotoContextProvider>
        <div className="container">
          <Header handleSubmit={handleTwiceSubmit} history={props.history} />
          <Routes>
            <Route path="/" element={<Navigate to="/javascript" />} />
            <Route path="/vietnam" element={<Item searchInput="vietnam" />} />
            <Route
              path="/south-korea"
              element={<Item searchInput="south-korea" />}
            />
            <Route
              path="/singapore"
              element={<Item searchInput="singapore" />}
            />
            <Route
              path="/javascript"
              element={<Item searchInput="javascript" />}
            />
            <Route path="/search/:searchInput" element={<Search />} />
            <Route element={<NotFound />} />
          </Routes>
        </div>
      </PhotoContextProvider>
    </div>
  );
}

export default App;
