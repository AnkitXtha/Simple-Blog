import { Link } from "react-router-dom";
import "./../styles/Profile.css";
import { useSelector } from "react-redux";
import { config } from "../config";

function Profile() {
  const { allBlogs } = useSelector((state: any) => state.blog)
  const {userInfo} = useSelector((state: any) => state.login)
  return (
    <>
      <main>
        <div className="main-section">
          <div className="heading">
            <h2>Profile</h2>
            <p>My Details</p>
          </div>
          <div className="user-details">
            <img src="/profile.jpeg" alt="profile" />
            <div className="user-info">
              <h3>{userInfo.user.name}</h3>
              <p>{userInfo.user.email}</p>
            </div>
          </div>

          <div className="my-blogs">
            <h2 className="blog-header">My Blogs</h2>
            {allBlogs? allBlogs
              .filter((blogDatas: any) => blogDatas.token === userInfo?.token)
              .map((blogData: any) => {
                return (
                  <div className="blogs">
                    <div className="blog-info">
                      <h2>Title</h2>
                      <p>Description</p>
                      <p><i>- author</i></p>
                      <p className="date">date</p>
                      <Link to={'#'}>View More</Link>
                    </div>
                    <img src="" alt="blog" />
                  </div>
                );
              }) : "No Blogs Found!"}

          </div>
        </div>
      </main>
    </>
  )
}

export default Profile
