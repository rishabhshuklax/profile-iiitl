import React from "react"
import profile from "../../assets/profile/AP.jpg"
import "../../components/template.css"
import Template from "../../components/layout"
import { NAVRender, AboveNav } from "../../components/methods"

const navData = [
  { link: "/Dr-Abhishek-Pandey/", value: "Home" },
  { link: "/Dr-Abhishek-Pandey/education", value: "Education" },
  { link: "/Dr-Abhishek-Pandey/course", value: "Course" },
  { link: "/Dr-Abhishek-Pandey/contact", value: "Contact" },
]
const faculty = { name: "Dr. Abhishek Pandey", photo: profile }

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
export default Layout
