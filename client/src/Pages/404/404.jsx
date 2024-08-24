import React from 'react';
import './404.css'

function error404() {
  return (
    <>
    <section className="section-404">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="text-404">
                        <h1>404</h1>
                        <p>Sorry bit the page you are looking for does not exist, have been removed or name changed</p>
                        <form action="#" className="search-404">
                            
                        </form>
                        <a href="/"><i className="fa fa-home"></i> Go back home</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default error404