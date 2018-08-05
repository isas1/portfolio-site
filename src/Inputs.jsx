import React, { Component } from 'react';

//material-ui imports
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
// Styles

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 20
  },
  heading: {
    height: 140,
    width: '90%',
    textAlign: 'center',
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2,
  },
  listItems: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2,
    width: '90%'
  },
  btn: {
    marginLeft: 5
  },
  avatar: {
    backgroundColor: getRandomTheme()
    //backgroundColor: purple[500]
  }
});

const theme = createMuiTheme({
  palette: {
    primary: purple,
  },
});


function getRandomTheme () {
  const colours = [purple[500], green[500]]
  const randomColourIndex = Math.floor(
    (Math.random() * (colours.length))
  );
  alert(randomColourIndex)
  alert(colours[randomColourIndex])
  return colours[randomColourIndex];
}


class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todosInit: ['This', 'is', 'my', 'list', 'app'],
      todos: [],
      todoText: '',
      message: false
    };
    this.updateTodoText = this.updateTodoText.bind(this);
    this.createTodo = this.createTodo.bind(this);
  }

  componentDidMount() {
    this.setState({
      todos: this.state.todosInit,
    });
  }

  updateTodoText(e) {
    this.setState({
      todoText: e.target.value
    });
  }

  createTodo(e) {
    e.preventDefault();
    this.setState({
      todos: [...this.state.todos, this.state.todoText],
      todoText: '',
    });
  }
  render() {

    const { classes } = this.props;

    return (
      <div>
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <Grid container justify="center" alignItems="center">
              <Paper className={classes.heading}>
                <h2 className="">Shopping List</h2>

                <form onSubmit={this.createTodo}>
                  <div>

                    {/*match color scheme*/}
                    <MuiThemeProvider theme={theme}>
                    <TextField
                      className="inputBox"
                      id="custom-css-input"
                      label="Type item here"
                      type="text"
                      value={this.state.todoText}
                      onChange={this.updateTodoText}
                    />
                    <Button variant="outlined" color="primary" className={classes.btn} type="submit">Add</Button>
                    </MuiThemeProvider>
                  </div>
                </form>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Grid container justify="center" alignItems="center">
                {this.state.todos.map((todo, index) => {
                  return (<Paper className={classes.listItems} key={Math.floor(Math.random() * 10000) + 1}>
                    <Grid container wrap="nowrap" spacing={16}>
                        <Avatar className={classes.avatar}>{index+1}</Avatar>
                      <Grid item xs zeroMinWidth>
                        <Typography noWrap>{todo}</Typography>
                      </Grid>
                    </Grid>
                  </Paper>);
                }
                )}
                {this.state.message ? <li>No search results.</li> : ''}

              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }

}

export default withStyles(styles)(Inputs);
