import React from "react"
import { Link } from "gatsby"
import { vks } from "../Data/FacultyData"
import profile from "../assets/profile/VKS.jpg"
import "../components/template.css"

const navData = [
  { link: "/Dr-Vshal-Krishna/", value: "Home" },
  { link: "/Dr-Vshal-Krishna/education", value: "Education" },
  { link: "/Dr-Vshal-Krishna/publications", value: "Publications" },
  { link: "/Dr-Vshal-Krishna/experience", value: "Experience" },
  { link: "/Dr-Vshal-Krishna/course", value: "Course" },
  { link: "/Dr-Vshal-Krishna/contact", value: "Contact" },
]
const faculty = { name: "Dr. Vishal Krishna Singh" }
const lists = [{ head: "Reasearch Interests", list: vks.interests }]
class VKS extends React.Component {
  NAVRender = props => {
    let list = props.data.map((val, i) => {
      return (
        <Link to={val.link} key={i} className="faculty-nav-item">
          {val.value}
        </Link>
      )
    })
    return <div className="faculty-nav-inner">{list}</div>
  }
  AboveNav = props => {
    return (
      <div className="faculty-above-nav">
        <div className="faculty-above-nav-inner">
          <div className="above-nav-section-1">
            <h2 className="faculty-above-nav-head-name">{props.data.name}</h2>
            <p className="faculty-above-nav-head-dept faculty-above-nav-item">
              Department of Information Technology
            </p>
            <p className="faculty-above-nav-head-institute faculty-above-nav-item">
              Indian Institute of Information Technology, Lucknow,UP,India
            </p>
          </div>
          <div className="above-nav-section-2">
            <img src={profile} alt="VKS" />
          </div>
        </div>
      </div>
    )
  }
  ListGenerator = props => {
    let list = props.data.list.map((val, i) => <li key={i}>{val}</li>)
    return (
      <div className="faculty-interest-section-1">
        <div className="faculty-interest-head faculty-section-head">
          {props.data.head}
        </div>
        <div className="faculty-interest-list">
          <ul>{list}</ul>
        </div>
      </div>
    )
  }
  render() {
    return (
      <div className="padding-res">
        <this.AboveNav data={faculty} />
        <div className="faculty-nav">
          <div className="faculty-nav-innerp">
            <this.NAVRender data={navData} />
          </div>
        </div>
        <div className="faculty-body" id="faculty-body-home">
          <div className="faculty-image-hid">
            <img src={profile} alt="VKS" />
          </div>
          <div className="faculty-interest">
            <this.ListGenerator data={lists[0]} />
          </div>
        </div>

        <div className="faculty-footer">
          <div className="faculty-footer-copy">&copy; 2019 IIIT Lucknow|</div>
          <div className="faculty-footer-department">Department of IT|</div>
          <div className="faculty-footer-department">
            Last Updated: March 2019
          </div>
        </div>
      </div>
    )
  }
}
export default VKS
