import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'

class Description extends Component {
    render() {
        return(
            <Grid container style={{width: '100%', margin: 0}}>
            <Grid item xs={12} style={{ height: '10vh', display: 'flex', alignItems: 'center'}}>
              <h3>Topic Title</h3>
            </Grid>
            <Grid item xs={12} style={{ height: '10vh', display: 'flex', alignItems: 'center' }}>
              <p>Some description about topic</p>
            </Grid>
            <Grid item xs={12} style={{ height: '15vh', display: 'flex', alignItems: 'center'  }}>
              <div>
                <p>Last activity: 1 min ago</p>
                <p>Number of tags: 745</p>
                <p>Overall score: 8 / 10</p>
              </div>
            </Grid>
            <Grid item xs={12} style={{ height: '20vh' }}>
              <span style={{ fontSize: '1em', fontWeight: '700' }}>Add tag</span>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <TextField
                  id="commet"
                  margin="normal"
                  placeholder="Your comment"
                  style={{ width: '15em' }}
                >
                </TextField>
                <TextField
                  id="score"
                  margin="normal"
                  placeholder="Score: 1 - 10"
                  style={{ width: '15em' }}
                >
                </TextField>
              </div>
              
            </Grid>
            <Grid item xs={12} container alignItems='center' justify='center' style={{ height: '10vh', margin: 0 }}>
              <Button raised style={{ backgroundColor: '#6ca554', color: '#000000', fontWeight: '700', width: '12em' }}>
                Submit
              </Button>
            </Grid>
            <Grid  item xs={12} style={{ height: '20vh' }}>
              <Grid container item alignItems='flex-end' justify='flex-start' xs={12} style={{ height: '7vh', margin: 0 }}>
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

export default Description