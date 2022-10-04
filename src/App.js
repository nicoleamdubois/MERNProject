import logo from "./logo.svg";
import "./App.css";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Student from "./components/showStudent/showStudent";
import Create from "./components/createStudent/createStudent";

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container maxWidth="lg">
        <AppBar className={classes.appbar} position="static" color="inherit">
          <typography className={classes.heading} variant="h2" align="center">
            Students Create & Show
          </typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justify="space-between"
              alignItems="stretch"
              spacing={3}
            ></Grid>
            <Grid item xs={12} sm={7}>
              <AppBar className={classes.appBar} position="static" color="inherit"></AppBar>
                <Student />
            </Grid>
            <Grid item xs={12} sm={4}>
            <AppBar className={classes.appBar} position="static" color="inherit">
              <Create />
            </AppBar>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
