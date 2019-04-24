import React from "react"
import { sushilTiwari } from "../../Data/FacultyData"
import profile from "../../assets/profile/Sushil.jpg"
import "../../components/template.css"
import Template from "../../components/layout"
import { NAVRender, AboveNav } from "../../components/methods"

const navData = [
  { link: "/Mr-Sushil-Tiwari/", value: "Home" },
  { link: "/Mr-Sushil-Tiwari/education", value: "Education" },
  { link: "/Mr-Sushil-Tiwari/publications", value: "Publications" },
  { link: "/Mr-Sushil-Tiwari/experience", value: "Experience" },
  { link: "/Mr-Sushil-Tiwari/course", value: "Course" },
  { link: "/Mr-Sushil-Tiwari/contact", value: "Contact" },
]
const faculty = { name: "Mr. Sushil Tiwari", photo: profile }

class VKS extends React.Component {
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
            <img src={profile} alt="VKS" />
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
export default VKS
