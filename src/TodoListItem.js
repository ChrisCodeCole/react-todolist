import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";

class TodoListItem extends React.Component {
  state = {
    checked: [],
    completed: []
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  };

  handleCompleted = value => () => {
    const { completed } = this.state;
    const currentIndex = completed.indexOf(value);
    const newCompleted = [...completed];

    if (currentIndex === -1) {
      newCompleted.push(value);
    } else {
      newCompleted.splice(currentIndex, 1);
    }

    this.setState({
      completed: newCompleted
    });
  };

  render() {

    const listItemTxt =
      this.state.completed.indexOf(this.props.value) !== -1 ? (
        <ListItemText
          style={{textDecoration:'line-through'}}
          onClick={this.handleToggle(this.props.value)}
          primary={this.props.listTaskTxt}
        />
      ) : (
        <ListItemText
          onClick={this.handleToggle(this.props.value)}
          primary={this.props.listTaskTxt}
        />
      );

    return (
      <div className='todo-item-container'>
        <List>
          <ListItem key={this.props.value} role={undefined} dense button>
            <Checkbox
              checked={this.state.checked.indexOf(this.props.value) !== -1}
              tabIndex={-1}
              disableRipple
              onClick={this.handleToggle(this.props.value)}
            />
            {listItemTxt}
            <Button onClick={this.handleCompleted(this.props.value)}>
              <Icon>done_outline</Icon>
            </Button>
            <Button onClick={this.props.removeClick}>
              <Icon>clear</Icon>
            </Button>
          </ListItem>
        </List>
      </div>
    );
  }
}

export default TodoListItem;
