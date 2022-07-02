import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CoinPage from "./pages/CoinPage";
import HomePage from "./pages/HomePage";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./components/Header";

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<HomePage />} />
            <Route path="coin/:id" element={<CoinPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));
