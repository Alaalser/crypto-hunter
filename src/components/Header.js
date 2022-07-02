import {
  AppBar,
  Container,
  createTheme,
  makeStyles,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core";

import { useNavigate, Outlet } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
const Header = () => {
  const darkTheme = createTheme({
    palette: {
      primary: { main: "#ffffff" },
      type: "dark",
    },
  });

  const { currency, setCurrency } = CryptoState();
  console.log(currency);

  const classes = useStyles();
  let navigate = useNavigate();

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <AppBar color="transparent" position="static">
          <Container>
            <Toolbar>
              <Typography
                onClick={() => navigate("/")}
                className={classes.title}
                variant="h6"
              >
                Crypto Hunter
              </Typography>
              <Select
                defaultValue={"USD"}
                variant="outlined"
                style={{ height: "40", width: 100, marginRight: 15 }}
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"ILS"}>ILS</MenuItem>
              </Select>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
      <Outlet />
    </div>
  );
};

export default Header;

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));
