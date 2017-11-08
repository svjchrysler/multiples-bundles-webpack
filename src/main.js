import React, { Component } from 'react'

import Grid from 'material-ui/Grid'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'

class Main extends Component {
    render() {
        return(
            <Grid container style={{width: '100%', margin: 0}}>
            
                      <Grid item xs={12} container alignItems='flex-end' justify='center' style={{ height: '20vh', margin: 0 }}>
                          <p>Enter the Topic Access Code</p>
                      </Grid>
            
                      <Grid item xs={12} container alignItems='center' justify='center' spacing={24} style={{ height: '25vh', margin: 0 }}>
                        <Grid item xs={2}>
                        </Grid>
                        <Grid item xs={2} style={{ padding: 0 }}>
                          <div style={{ borderStyle: 'solid', borderWidth: '1px', marginLeft: 2.5, marginRight: 2.5 }}>
                            <TextField
                              id="name"
                              margin="normal"
                              style={{ fontSize: '2.5em', paddingLeft: '10%', paddingRight: '10%'}}
                            />
                          </div>
                        </Grid>
                        <Grid item xs={2} style={{ padding: 0 }}>
                          <div style={{ borderStyle: 'solid', borderWidth: '1px', marginLeft: 2.5, marginRight: 2.5 }}>
                            <TextField
                              id="name"
                              margin="normal"
                              style={{ fontSize: '2.5em', paddingLeft: '10%', paddingRight: '10%'}}
                            />
                          </div>
                        </Grid>
                        <Grid item xs={2} style={{ padding: 0 }}>
                          <div style={{ borderStyle: 'solid', borderWidth: '1px', marginLeft: 2.5, marginRight: 2.5 }}>
                            <TextField
                              id="name"
                              margin="normal"
                              style={{ fontSize: '2.5em', paddingLeft: '10%', paddingRight: '10%'}}
                            />
                          </div>
                        </Grid>
                        <Grid item xs={2} style={{ padding: 0 }}>
                          <div style={{ borderStyle: 'solid', borderWidth: '1px', marginLeft: 2.5, marginRight: 2.5 }}>
                            <TextField
                              id="name"
                              margin="normal"
                              style={{ fontSize: '2.5em', paddingLeft: '10%', paddingRight: '10%'}}
                            />
                          </div>
                        </Grid>
                        <Grid item xs={2}>
                        </Grid>
                      </Grid>
            
                      <Grid item xs={12} container alignItems='center' justify='center' style={{ height: '20vh', margin: 0 }}>
                        <Button raised style={{ backgroundColor: '#6ca554', color: '#000000', fontWeight: '700', width: '12em' }}>
                          Submit
                        </Button>
                      </Grid>
            
                      <Grid  item xs={12} style={{ height: '25vh' }}>
                        <Grid container item alignItems='flex-end' justify='flex-start' xs={12} style={{ height: '12vh', margin: 0 }}>
                          <p>Get the Tagit App</p>
                        </Grid>
                        <Grid container alignItems='center' justify='flex-start'  style={{width: '100%', margin: 0, height: '13vh'}}>
                          <img src="http://sleepheroapp.com/wp-content/uploads/2015/04/App-Store-Logo1-950x334.png" width="150" height="50" />
                          <img src="https://blog.glasswire.com/wp-content/uploads/2017/03/2000px-Get_it_on_Google_play.svg_.png" width="150" height="50" />
                        </Grid>
                      </Grid>
                    </Grid>
        )
    }
}

export default Main