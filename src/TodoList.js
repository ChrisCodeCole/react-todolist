import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import TodoListItem from "./TodoListItem";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listItems: ['List item 1', 'Walk Dog', 'Go for run'],
      input: ''
    };
  }

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  handleRemove = listString => {
    const { listItems } = this.state;

    const newList = listItems.filter(text => {
      return text !== listString;
    });

    this.setState({
      listItems: newList
    });
  };

  handleAddition = (e) => {
    e.preventDefault();
    const { listItems } = this.state;

    const newList = [...listItems, this.state.input];

    if (this.state.input !== '') {
      this.setState({
        listItems: newList,
        input: ''
      });
    }
  };

  onKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleAddition(e);
    }
  }

  render() {
    return (
      <div className='todoListMain'>
        <Card>
          <CardContent>
            <Grid container justify='center'>
            <CardHeader title='Todo List'>
            </CardHeader>
              <Grid item xs={12}>
                <FormControl>
                  <InputLabel htmlFor="input-with-icon-adornment">
                    Add new task
                  </InputLabel>
                  <Input
                    id='input-with-icon-adornment'
                    onChange={this.handleChange}
                    value={this.state.input}
                    autoFocus={true}
                    onKeyPress={this.onKeyPress}
                    startAdornment={
                      <InputAdornment position='start'>
                        <Icon>assignment</Icon>
                      </InputAdornment>
                    }
                  />
                  <Button onClick={this.handleAddition}>
                    <Icon>add_circle</Icon>
                  </Button>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container justify='center'>
              <Grid item>
                {this.state.listItems.map((listInfo, idx) => (
                  <TodoListItem
                    key={idx}
                    value={idx}
                    listTaskTxt={listInfo}
                    removeClick={() => this.handleRemove(listInfo)}
                  />
                ))}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    );
  }
}
