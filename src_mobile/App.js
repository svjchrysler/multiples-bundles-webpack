import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Main from './main'
import Description from './description'

class App extends Component {
  render() {
    return (
      <div style={{ width: '100%', height: '100vh' }}>
        <AppBar position="static" color="default" style={{ backgroundColor: '#b6d5a9'}} >
          <Toolbar>
            <Typography type="title" color="inherit" style={{ color: '#000', fontWeight: 700 }}>
              Tagit
            </Typography>
          </Toolbar>
        </AppBar>
        <Description />
      </div>
    )
  }
}

export default App;
