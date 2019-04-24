import React from "react"
import { sushilTiwari } from "../../Data/FacultyData"
import profile from "../../assets/profile/somendu.jpg"
import "../../components/template.css"
import Template from "../../components/layout"
import { NAVRender, AboveNav } from "../../components/methods"

const navData = [
  { link: "/Dr-Soumendu-Chakraborty/", value: "Home" },
  { link: "/Dr-Soumendu-Chakraborty/education", value: "Education" },
  { link: "/Dr-Soumendu-Chakraborty/publications", value: "Publications" },
  { link: "/Dr-Soumendu-Chakraborty/experience", value: "Experience" },
  { link: "/Dr-Soumendu-Chakraborty/course", value: "Course" },
  { link: "/Dr-Soumendu-Chakraborty/contact", value: "Contact" },
]
const faculty = { name: "DR. SOUMENDU CHAKRABORTY", photo: profile }

class Soumendu extends React.Component {
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
            <img src={profile} alt="Soumendu" />
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
export default Soumendu
