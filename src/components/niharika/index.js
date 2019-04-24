import React from "react"
import { niharika } from "../../Data/FacultyData"
import profile from "../../assets/profile/niharikha.jpg"
import "../../components/template.css"
import Template from "../../components/layout"
import { NAVRender, AboveNav } from "../../components/methods"

const navData = [
  { link: "/Dr-Niharikha-Anand/", value: "Home" },
  { link: "/Dr-Niharikha-Anand/education", value: "Education" },
  { link: "/Dr-Niharikha-Anand/publications", value: "Publications" },
  { link: "/Dr-Niharikha-Anand/experience", value: "Experience" },
  { link: "/Dr-Niharikha-Anand/course", value: "Course" },
  { link: "/Dr-Niharikha-Anand/contact", value: "Contact" },
]
const faculty = { name: "Dr. Niharikha Anand", photo: profile }

class Layout extends React.Component {
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
            <img src={profile} alt="Niharikha" />
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
export default Layout
