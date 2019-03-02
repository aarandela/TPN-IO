import React, { Component } from 'react'
import Inputs from '../../navbar/Inputs'

export default class Today extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <React.Fragment>
        <section class="section" style={{ padding: '20px 0 10px 0' }}>
          <div class="container">
            <h1 class="title has-text-centered" style={{ padding: '0' }}
              >Recent Inputs
            </h1>
          </div>
        </section>
        <div class="columns">
          <div class="column">
            <div class="card">
              <header class="card-header has-text-centered">
                <p class="card-header-title">
                  Urine
                </p>
              </header>
              <div class="card-content">
                <div class="content">
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> <br/>
                  <strong>Value: </strong> 23 <br/>
                  <strong>Comments: </strong> yellow
                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item">Delete</a>
              </footer>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <header class="card-header has-text-centered">
                <p class="card-header-title">
                  Urine
                </p>
              </header>
              <div class="card-content">
                <div class="content">
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> <br/>
                  <strong>Value: </strong> 23 <br/>
                  <strong>Comments: </strong> yellow
                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item">Delete</a>
              </footer>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <header class="card-header has-text-centered">
                <p class="card-header-title">
                  Gtube
                </p>
              </header>
              <div class="card-content">
                <div class="content">
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> <br/>
                  <strong>Value: </strong> 23 <br/>
                  <strong>Comments: </strong> yellow
                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item">Delete</a>
              </footer>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <header class="card-header has-text-centered">
                <p class="card-header-title">
                  Urine
                </p>
              </header>
              <div class="card-content">
                <div class="content">
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> <br/>
                  <strong>Value: </strong> 23 <br/>
                  <strong>Comments: </strong> yellow
                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item">Delete</a>
              </footer>
            </div>
          </div>
        </div>



        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child notification is-warning has-text-centered">
              <div class="content">
                <p class="title">Urine</p>
                <p class="subtitle has-text-left">With even more content</p>
                <div class="content has-text-left">
                  content here
                </div>
              </div>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child 
                            notification 
                            is-success 
                            has-text-black-ter
                            has-text-centered">
              <div class="content">
                <p class="title">Gtube</p>
                <p class="subtitle has-text-left">With even more content</p>
                <div class="content has-text-left">
                  content here
                </div>
              </div>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-primary has-text-centered has-text-grey-darker">
              <div class="content">
                <p class="title">Ostomy</p>
                <p class="subtitle has-text-left">With even more content</p>
                <div class="content has-text-left">
                  content here
                </div>
              </div>
            </article>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
