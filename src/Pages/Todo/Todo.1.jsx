import React, { Component } from 'react';

//import ParticleEffectButton from 'react-particle-effect-button';

//material-ui imports
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';

import Add from '@material-ui/icons/AddCircleOutline';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';

import theme from '@components/ThemeChanger/Themes';

import { FaArrowAltCircleRight } from 'react-icons/fa';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  avatar: {
    backgroundColor: getRandomColour(),
    color: '#666'
  },
  paperRightTitle: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2
  },
  paperLeft: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2,
    height: '82vh'
  },
  leftInnerContainer: {
    border: 'solid 1px black'
  },
  listItems: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2
  }
});

function getRandomColour() {
  return '' + theme.palette.primary[50];
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
        <Grid container spacing={16}>
          <Grid item md={6}>
            <Hidden smDown>
              <Paper className={classes.paperLeft}  >
                <Grid container alignItems='stretch' justify='center' className={classes.leftInnerContainer}>
                  <Grid item >
                    <Typography variant='title'> Make the window smaller to hide me. <FaArrowAltCircleRight /></Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Hidden>
          </Grid>
          <Grid item xs={12} md={6}>

            <Zoom in={true} timeout={500}>
              <Paper className={classes.paperRightTitle}>
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
            </Zoom>

            <Slide direction="up" in={true} timeout={1000} style={{ transitionDelay: 500 }} mountOnEnter unmountOnExit>
            <Grid item>
              {this.state.todos.map((todo, index) => {
                return (


                  <Paper className={classes.listItems} key={Math.floor(Math.random() * 500) + 1}>
                    <Grid container wrap="nowrap" spacing={16}>
                      <Avatar className={classes.avatar}>{index + 1}</Avatar>
                      <Grid item xs={12} zeroMinWidth>
                        <Typography noWrap>{todo}</Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                );
              }
              )}
              {this.state.message ? <li>No search results.</li> : ''}
            </Grid>
            </Slide>
          </Grid>
        </Grid>

      </div>
    );
  }

}

export default withStyles(styles)(Inputs);
