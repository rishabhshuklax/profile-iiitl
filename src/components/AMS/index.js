import React from "react"
import profile from "../../assets/profile/dr-arun-sherry.jpg"
import "../../components/template.css"
import Template from "../../components/layout"
import { NAVRender, AboveNav } from "../../components/methods"

const navData = [
  { link: "/Dr-Arun-Mohan-Sherry/", value: "Home" },
  { link: "/Dr-Arun-Mohan-Sherry/education", value: "Education" },
  { link: "/Dr-Arun-Mohan-Sherry/publications", value: "Publications" },
  { link: "/Dr-Arun-Mohan-Sherry/experience", value: "Experience" },
  { link: "/Dr-Arun-Mohan-Sherry/contact", value: "Contact" },
]
const faculty = { name: "Dr. Arun Mohan Sherry", photo: profile }

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
