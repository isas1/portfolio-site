import React, { Component } from 'react';

//material-ui imports
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
// Styles

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: '75%',
    textAlign: 'center'
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});


class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todosInit: ['100 kg Meat', 'Ham', 'Cheese'],
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
        <Grid container className={classes.root} spacing={16}>
          <Grid item xs={12}>
            <Grid container justify="center" alignItems="center">
              <Paper className={classes.paper}>
                <h2 className="">Shopping List</h2>

                <form onSubmit={this.createTodo}>
                  <div className="">
                    <Input
                      classes={{
                        underline: classes.cssUnderline,
                      }}
                      id="custom-css-input"
                      type="text"
                      placeholder="Insert here…"
                      value={this.state.todoText}
                      onChange={this.updateTodoText}
                    />
                    <button className="">Create</button>
                  </div>
                </form>
              </Paper>
            </Grid>
            <Grid item xs={12}>
            <Grid container justify="center" alignItems="center">
              <Paper className={classes.paper}>
                <ul>
                  {this.state.todos.map((todo) => {
                    return (<li key={Math.floor(Math.random() * 10000) + 1}>{todo}</li>);
                  }
                  )}
                  {this.state.message ? <li>No search results.</li> : ''}
                </ul>
              </Paper>
            </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }

}

export default withStyles(styles)(Inputs);
