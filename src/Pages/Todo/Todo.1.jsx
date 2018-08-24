import React, { Component } from 'react';

//import ParticleEffectButton from 'react-particle-effect-button';

//material-ui imports
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';

import Add from '@material-ui/icons/AddCircleOutline';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import theme from '../../Components/ThemeChanger/Themes';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  avatar: {
    backgroundColor: getRandomColour(),
    color: '#666'
  },
  paperBg: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2
  },
  listItems: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2
  }
});

function getRandomColour() {
  return ''+theme.palette.primary[50];
}


class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todosInit: ['List', 'items', 'here'],
      todos: [],
      todoText: '',
      message: false,
      hidden: false
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
      <div className={classes.root}>
        <Paper className={classes.paperBg}>
          <h2>Todo</h2>

          <form onSubmit={this.createTodo}>
            <div>

              {/*match color scheme*/}
              <MuiThemeProvider theme={theme}>
                <Grid container spacing={8} alignItems="flex-end" justify='center'>

                  <Grid item>
                    <Add />
                  </Grid>

                  <Grid item>
                    <TextField
                      className="inputBox"
                      id="custom-css-input"
                      label="Type item here"
                      type="text"
                      value={this.state.todoText}
                      onChange={this.updateTodoText}
                    />
                    <Button color='primary' type="submit">Add</Button>
                  </Grid>

                </Grid>

              </MuiThemeProvider>
            </div>
          </form>
        </Paper>
        {this.state.todos.map((todo, index) => {
          return (
            <Paper className={classes.listItems} key={Math.floor(Math.random() * 500) + 1}>
              <Grid container wrap="nowrap" spacing={16}>
                <Avatar className={classes.avatar}>{index + 1}</Avatar>
                <Grid item xs={12} zeroMinWidth>
                  <Typography noWrap>{todo}</Typography>
                </Grid>
              </Grid>
            </Paper>);
        }
        )}
        {this.state.message ? <li>No search results.</li> : ''}

      </div>
    );
  }

}

export default withStyles(styles)(Inputs);
