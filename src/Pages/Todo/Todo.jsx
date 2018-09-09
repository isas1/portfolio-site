import React, { Component } from 'react';

//material-ui imports
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';

import Add from '@material-ui/icons/AddCircleOutline';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Iframe from 'react-iframe';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';

import theme from '@theme';

import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  avatar: {
    backgroundColor: getThemeColour(),
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
  listItems: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2
  }
});


function getThemeColour() {
  return '' + theme.palette.primary[50];
}

// ***  START OF DND consts

// fake data generator
const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k}`,
  }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = theme.spacing.unit;

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,

});

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle,
});


class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Original items
      todosInit: ['List', 'items', 'here'],
      todos: [],
      todoText: '',
      message: false,
      hidden: false,

      // New items
      items: getItems(10)
    };
    this.updateTodoText = this.updateTodoText.bind(this);
    this.createTodo = this.createTodo.bind(this);

    // dnd addition
    this.onDragEnd = this.onDragEnd.bind(this);
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

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items,
    });
  }

  render() {

    const { classes } = this.props;

    return (

      <div className={classes.root}>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable">

            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                <Grid container>
                  <Grid item md={6}>
                    <Hidden smDown>

                      <Paper className={classes.paperLeft}  >

                        <Iframe
                          url="https://www.youtube.com/embed/ibGnjSKLqTc"
                          minWidth="100%"
                          frameborder="0"
                          display="initial"
                          position="relative"
                          allowFullScreen />

                      </Paper>

                    </Hidden>
                  </Grid>

                  <Grid item xs={12} md={6}>

                    <Grow in={true} timeout={500}>
                      <Paper className={classes.paperRightTitle}>

                        <Grid container spacing={16}>
                          <Grid item>
                            <h2>Todo</h2>
                          </Grid>

                          <Grid item>
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
                          </Grid>
                        </Grid>
                      </Paper>
                    </Grow>

                    

                          {/*
                          {this.state.todos.map((todo, index) => {
                            return (

                              <Draggable key={todo.id} draggableId={todo.id} index={index}>
                                {(provided, snapshot) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={getItemStyle(
                                      snapshot.isDragging,
                                      provided.draggableProps.style
                                    )}
                                  >
                                  
                                    <Paper className={classes.listItems} key={Math.floor(Math.random() * 5000) + 1}>
                                      <Grid container wrap="nowrap" spacing={16}>
                                        <Avatar className={classes.avatar}>{index + 1}</Avatar>
                                        <Grid item xs={12} zeroMinWidth>
                                          <Typography noWrap>{todo}</Typography>
                                        </Grid>
                                      </Grid>
                                    </Paper>


                                  </div>
                                )}
                              </Draggable>
                            );
                          }
                          )}
                          */}

                          {this.state.items.map((item, index) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                              {(provided, snapshot) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  style={getItemStyle(
                                    snapshot.isDragging,
                                    provided.draggableProps.style
                                  )}
                                >
                                  
                                  {item.content}
                                </div>
                              )}
                            </Draggable>
                          ))}

                          {this.state.message ? <li>No search results.</li> : ''}
                        
                  </Grid>
                </Grid>
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    );
  }

}

export default withStyles(styles)(Inputs);
