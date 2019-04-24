import React from "react"
import { Link } from "gatsby"
import { shikha } from "../../Data/FacultyData"
import profile from "../../assets/profile/Shikha.jpg"
import "../../components/template.css"
import Template from "../../components/layout"
import { NAVRender, AboveNav } from "../../components/methods"

const navData = [
  { link: "/Dr-Shikha-Gautam/", value: "Home" },
  { link: "/Dr-Shikha-Gautam/education", value: "Education" },
  { link: "/Dr-Shikha-Gautam/publications", value: "Publications" },
  { link: "/Dr-Shikha-Gautam/course", value: "Course" },
  { link: "/Dr-Shikha-Gautam/contact", value: "Contact" },
]
const faculty = { name: "Dr Shikha Gautam", photo: profile }

class SG extends React.Component {
  render() {
    return (
      <Template>
        <AboveNav data={faculty} faculty={faculty} />
        <div className="faculty-nav">
          <div className="faculty-nav-innerp">
            <NAVRender data={navData} />
          </div>
        </div>
        <div className="faculty-body" id="faculty-body-home">
          <div className="faculty-image-hid">
            <img src={profile} alt="img" />
          </div>
          {this.props.children}
        </div>

        <div className="faculty-footer">
          <div className="faculty-footer-copy">&copy; 2019 IIIT Lucknow|</div>
          <div className="faculty-footer-department">Department of IT|</div>
          <div className="faculty-footer-department">
            Last Updated: March 2019
          </div>
        </div>
      </Template>
    )
  }
}
export default SG
