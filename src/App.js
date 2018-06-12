import React, { Component } from "react";
import TodoList from './TodoList';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <TodoList />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
