import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
      <div className="container bg-light d-flex flex-column justify-content-center align-items-center px-lg-5 my-5">
        <div className="p-4 p-lg-5 text-center rounded-3">

          <h1 className="display-5 fw-bold">A warm welcome!</h1>
          <p style={{fontSize:'1.3rem'}} className='fs-4 text-center'>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
          <a className ="btn btn-primary" href="#">Call to action</a>
        </div>



      </div>
        

    )
  }
}
