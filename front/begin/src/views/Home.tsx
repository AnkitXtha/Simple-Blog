import React, { useEffect } from "react";
import "./../styles/Home.css";
import { useSelector } from "react-redux";

function Home() {
  const { allBlogs } = useSelector((state:any) => state.blog)
  return (
    <>
      <main className="main">
        <div className="main-container">

          {/* Recent BLog */}
          <div className="popularHeading">
            <h2>Recent Blogs</h2>
          </div>
          {allBlogs?<div
            id="carouselExampleCaptions"
            className="carousel carousel-dark slide"
            data-bs-ride="false"
            data-bs-wrap="false"
            >
            {/* <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div> */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="card-group allCard">
                  <div className="card">
                    <img
                      src="https://smallseotool.in/placeholder/600x300/D5D5D5/584959"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Card title
                      </h5>
                      <p className="card-text">
                        This is a wider card with
                        supporting text below as a
                        natural lead-in to additional
                        content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <img
                      src="https://smallseotool.in/placeholder/600x300/D5D5D5/584959"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Card title
                      </h5>
                      <p className="card-text">
                        This card has supporting text
                        below as a natural lead-in to
                        additional content.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <img
                      src="https://smallseotool.in/placeholder/600x300/D5D5D5/584959"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Card title
                      </h5>
                      <p className="card-text">
                        This is a wider card with
                        supporting text below as a
                        natural lead-in to additional
                        content. This card has even
                        longer content than the first to
                        show that equal height action.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card-group allCard">
                  <div className="card">
                    <img
                      src="https://smallseotool.in/placeholder/600x300/D5D5D5/584959"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Card title
                      </h5>
                      <p className="card-text">
                        This is a wider card with
                        supporting text below as a
                        natural lead-in to additional
                        content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <img
                      src="https://smallseotool.in/placeholder/600x300/D5D5D5/584959"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Card title
                      </h5>
                      <p className="card-text">
                        This card has supporting text
                        below as a natural lead-in to
                        additional content.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <img
                      src="https://smallseotool.in/placeholder/600x300/D5D5D5/584959"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Card title
                      </h5>
                      <p className="card-text">
                        This is a wider card with
                        supporting text below as a
                        natural lead-in to additional
                        content. This card has even
                        longer content than the first to
                        show that equal height action.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card-group allCard">
                  <div className="card">
                    <img
                      src="https://smallseotool.in/placeholder/600x300/D5D5D5/584959"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Card title
                      </h5>
                      <p className="card-text">
                        This is a wider card with
                        supporting text below as a
                        natural lead-in to additional
                        content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <img
                      src="https://smallseotool.in/placeholder/600x300/D5D5D5/584959"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Card title
                      </h5>
                      <p className="card-text">
                        This card has supporting text
                        below as a natural lead-in to
                        additional content.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
            <button
              className="carousel-control-prev left-right-arrow"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next left-right-arrow"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>: <p>No Blogs Found !</p>}


          {/* Popular Blog */}
          <div className="popularHeading">
            <h2>Popular Blogs</h2>
            </div>
            <div>
  {allBlogs?<div className="overflow-auto recentCard">
    <div className="card" style={{maxWidth: "1140px"}}>
        <div className="row g-0">
            <div className="col-md-4">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp" className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </p>
                    <p className="card-text">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div className="card" style={{maxWidth: "1140px"}}>
        <div className="row g-0">
            <div className="col-md-4">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp" className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </p>
                    <p className="card-text">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div className="card" style={{maxWidth: "1140px"}}>
        <div className="row g-0">
            <div className="col-md-4">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp" className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </p>
                    <p className="card-text">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div className="card" style={{maxWidth: "1140px"}}>
        <div className="row g-0">
            <div className="col-md-4">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp" className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </p>
                    <p className="card-text">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                </div>
            </div>
        </div>
    </div>
  </div> : <p>No Blogs Found !</p> }
</div>
          </div>
      </main>
    </>
  );
}

export default Home;
