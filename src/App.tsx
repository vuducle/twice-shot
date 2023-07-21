import React from "react";
import logo from "./logo.svg";
import PhotoContextProvider from "./utils/PhotoProvider";
import {
  HashRouter,
  Routes,
  Route,
  redirect,
  BrowserRouter,
} from "react-router-dom";
import Header from "./Components/Header";
import Item from "./Components/Item";
import Search from "./Components/Search";
import NotFound from "./Components/NotFound";

function App(props: any) {
  function handleTwiceSubmit(e: any, history: any, searchInput: string) {
    e.preventDefault();
    e.currentTarget.reset();
    let url: string = `/search/${searchInput}`;
    history.push(url);
  }

  return (
    <div className="App">
      <PhotoContextProvider>
        <BrowserRouter basename="/index">
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={
                  <Header
                    handleSubmit={handleTwiceSubmit}
                    history={props.history}
                  />
                }
              />
              {/* <Route
                path="/"
                render={() => <Redirect to="/mountain" />}
              />

              <Route
                path="/mountain"
                render={() => <Item searchTerm="mountain" />}
              />
              <Route path="/beach" render={() => <Item searchTerm="beach" />} />
              <Route path="/bird" render={() => <Item searchTerm="bird" />} />
              <Route path="/food" render={() => <Item searchTerm="food" />} />
              <Route path="/search/:searchInput" element={<Search />} /> */}
              <Route element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </PhotoContextProvider>
    </div>
  );
}

export default App;
