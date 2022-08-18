import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-lg-6 col-xl-4 mb-5">
                <div className="card bg-light border-0 h-100">
                    <div style={{paddingTop:'0 !important'}} className="card-body text-center p-4  pt-0 pt-lg-0">
                    <div style={{width:'3rem',height:'3rem', margin:'0 auto'}} className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4 ">
                            <i style={{fontSize:'2rem'}}  class="bi bi-collection"></i>
                        </div>
                        <div className="content">

                            <h2 style={{fontSize:'24px'}} class="fs-4 fw-bold">Fresh new layout</h2>
                            <p style={{fontSize:'14px'}} class="mb-0">With Bootstrap 5, we've created a fresh new layout for this template!</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-lg-6 col-xl-4 mb-5">
                <div className="card bg-light border-0 h-100">
                    <div className="card-body text-center p-4  pt-0 pt-lg-0">
                    <div style={{width:'3rem',height:'3rem', margin:'0 auto'}} className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4 ">
                        <i style={{fontSize:'2rem'}} class="bi bi-cloud-download"></i>
                        </div>
                        <div className="content">

                            <h2 style={{fontSize:'24px'}} class="fs-4 fw-bold">Free to download</h2>
                            <p style={{fontSize:'14px'}} class="mb-0">As always, Start Bootstrap has a powerful collection of free templates.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-lg-6 col-xl-4 mb-5">
                <div className="card bg-light border-0 h-100">
                    <div className="card-body text-center p-4  pt-0 pt-lg-0">
                    <div style={{width:'3rem',height:'3rem', margin:'0 auto'}} className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4 ">
                        <i style={{fontSize:'2rem'}} class="bi bi-card-heading"></i>
                        </div>
                        <div className="content">

                            <h2 style={{fontSize:'24px'}} class="fs-4 fw-bold">Jumbotron hero header</h2>
                            <p style={{fontSize:'14px'}} class="mb-0">The heroic part of this template is the jumbotron hero header!</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-lg-6 col-xl-4 mb-5">
                <div className="card bg-light border-0 h-100">
                    <div className="card-body text-center p-4  pt-0 pt-lg-0">
                    <div style={{width:'3rem',height:'3rem', margin:'0 auto'}} className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4 ">
                        <i style={{fontSize:'2rem'}} class="bi bi-bootstrap"></i>
                        </div>
                        <div className="content">

                            <h2 style={{fontSize:'24px'}} class="fs-4 fw-bold">Feature boxes</h2>
                            <p style={{fontSize:'14px'}} class="mb-0">We've created some custom feature boxes using Bootstrap icons!</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-lg-6 col-xl-4 mb-5">
                <div className="card bg-light border-0 h-100">
                    <div className="card-body text-center p-4  pt-0 pt-lg-0">
                    <div style={{width:'3rem',height:'3rem', margin:'0 auto'}} className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4 ">
                        <i style={{fontSize:'2rem'}} class="bi bi-code"></i>
                        </div>
                        <div className="content">

                            <h2 style={{fontSize:'24px'}} class="fs-4 fw-bold">Simple clean code</h2>
                            <p style={{fontSize:'14px'}} class="mb-0">We keep our dependencies up to date and squash bugs as they come!</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-lg-6 col-xl-4 mb-5">
                <div className="card bg-light border-0 h-100">
                    <div className="card-body text-center p-4  pt-0 pt-lg-0">
                        <div style={{width:'3rem',height:'3rem', margin:'0 auto'}} className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4 ">
                        <i style={{fontSize:'2rem'}} class="bi bi-patch-check"></i>
                        </div>
                        <div className="content">

                            <h2 style={{fontSize:'24px'}} class="fs-4 fw-bold">A name you trust</h2>
                            <p style={{fontSize:'14px'}} class="mb-0">Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>



      </div>
    )
  }
}
