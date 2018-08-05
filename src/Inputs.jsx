import React, { Component } from 'react';

//material-ui imports
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
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
    marginBottom: 20
  },
  listItems: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    height: 20,
    width: '90%',
    marginTop: 5,
    textAlign: 'center'
  }
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
        <Grid container className={classes.root}/>
          <Grid item xs={12}>
            <Grid container justify="center" alignItems="center">
              <Paper className={classes.heading}>
                <h2 className="">Shopping List</h2>

                <form onSubmit={this.createTodo}>
                  <div className="">
                    <TextField
                      classes={{
                        underline: classes.cssUnderline,
                      }}
                      id="custom-css-input"
                      label="Type item here"
                      type="text"
                      value={this.state.todoText}
                      onChange={this.updateTodoText}
                    />
                    <button className="">Add</button>
                  </div>
                </form>
              </Paper>
            </Grid>
            <Grid item xs={12}>
            <Grid container justify="center" alignItems="center">
              
                
                  {this.state.todos.map((todo) => {
                    return (<Paper className={classes.listItems} key={Math.floor(Math.random() * 10000) + 1}>{todo}</Paper>);
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
