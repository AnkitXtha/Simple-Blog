
import { useState } from "react";
import "./../styles/Blog.css";
import { useDispatch, useSelector } from "react-redux";
import { postBlogCall } from "../state/reducers/blog/blogAction";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { config } from "../config";

function Blog() {
  const [popUp, setPopUp] = useState(false)
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [_token, setToken] = useState('');
  const { allBlogs } = useSelector((state: any) => state.blog)
  const dispatch = useDispatch()
  const navigate: any = useNavigate()
  const {userInfo} = useSelector((state: any) => state.login)

  const popUpHandle = (e: any) => {
    e.preventDefault();
    if (popUp == false) {
      setPopUp(true);
    } else {
      setPopUp(false)
    }
    setToken(userInfo.user._id)
    setAuthor(userInfo.user.name)
    // var tokenInfo = localStorage.getItem("user")
    // if (tokenInfo) {
    //   toast.warn("Login")
    // }
  }
  

  const crossPopup = (e: any) => {
    e.preventDefault();
    setPopUp(false)
  }

  const blogPostHandle = (e: any) => {
    e.preventDefault();
    const blogCredentials = {
      title,
      description,
      author,
      _token
    }
    dispatch(postBlogCall(blogCredentials)).then((response: any) => {
      if (response.payload.newBlog) {
        toast.success("New blog added")
        setTitle('')
        setDescription('')
        setPopUp(false)
      } else {
        toast.error('error')
      }

    })
  }


  return (
    <>
      <main>
        <div className="main-section" >

          <div className="featuredBlog">
            <h1 className="header">
              Featured Blog
            </h1>
          </div>

          <div className="slider">
            <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleRide" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleRide" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleRide" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="/slider.jpeg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{allBlogs ? allBlogs[0]?.title : '404 No data !'}</h5>
                    <p>{allBlogs ? allBlogs[0]?.description : ''}</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="/slider.jpeg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{allBlogs ? allBlogs[1]?.title : '404 No data !'}</h5>
                    <p>{allBlogs ? allBlogs[1]?.description : ''}</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="/slider.jpeg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{allBlogs ? allBlogs[2]?.title : '404 No data !'}</h5>
                    <p>{allBlogs ? allBlogs[2]?.description : ''}</p>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>


          <div className="blogHeader">
            <h1 className="header">
              Blogs
            </h1>
            {userInfo.user._id ? <button type="button" onClick={popUpHandle} className="btn btn-outline-primary newBlog-btn">New Blog</button> : <button type="button" onClick={() => {
              toast.warn("Login first!")
              navigate('/login')
            }} className="btn btn-outline-primary newBlog-btn">New Blog</button>}
          </div>

          <div className="cardContainer">
            {allBlogs ? allBlogs?.map((blogDatas: any) => {
              return (
                <div className="card" key={blogDatas?._id}>
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{blogDatas?.title}</h5>
                    <p className="card-text">{blogDatas?.description}</p>
                    <a href="#" className="btn btn-primary">Read more</a>
                  </div>
                </div>
              );
            }) : <p>No Blogs Found !</p>}
          </div>
        </div>

        <div className="pop-upForm" style={popUp == false ? { display: "none" } : { display: "block" }}>

          <div className="form-section">
            <form action="POST" className="form-fields" >
              <div className="formhead" style={{ display: "flex", justifyContent: "space-between" }}>
                <h2>New Blog</h2>
                <button onClick={crossPopup} style={{ border: "none", padding: "1rem", backgroundColor: "#fff", color: "#000" }}>X</button>
              </div>
              <div onClick={(e: any) => {if(!e){setPopUp(false)}}}>
              <label htmlFor="title">Title:</label>
              <input type="text" value={title} onChange={(e: any) => {
                e.preventDefault();
                setTitle(e.target.value);
              }} id="title" name="title" required />

              <label htmlFor="description">Description:</label>
              <textarea id="description" value={description} onChange={(e: any) => {
                e.preventDefault();
                setDescription(e.target.value);
              }} name="description" rows={4} required></textarea>

              <input type="text" id="author" value={author} name="author" required hidden />

              <input type="text" value={_token} id="token" name="token" required hidden />

              <button type="submit" onClick={blogPostHandle}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}

export default Blog
