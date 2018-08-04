import React, { Component } from 'react';

//material-ui imports
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
// Styles

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  cssLabel: {
    '&$cssFocused': {
      color: purple[500],
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: purple[500],
    },
  },
  bootstrapRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
});

const theme = createMuiTheme({
  palette: {
    primary: green,
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
        <div className="">
          <div className="">
            <div className="">
              <h2 className="">Shopping List</h2>
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <form onSubmit={this.createTodo}>
              <div className="">
                <Input
                  classes={{
                    underline: classes.cssUnderline,
                  }}
                  id="custom-css-input"
                  type="number"
                  placeholder="Insert here…"
                  value={this.state.todoText}
                  onChange={this.updateTodoText}
                />
                <button className="">Create</button>
              </div>
            </form>
            <ul>
              {this.state.todos.map((todo) => {
                return (<li key={Math.floor(Math.random() * 10000) + 1}>{todo}</li>);
              }
              )}
              {this.state.message ? <li>No search results.</li> : ''}
            </ul>
          </div>
        </div>
      </div>
    );
  }

}

export default withStyles(styles)(Inputs);
