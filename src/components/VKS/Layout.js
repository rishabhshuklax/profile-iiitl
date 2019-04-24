import React from "react"
import { Link } from "gatsby"
import { vks } from "../../Data/FacultyData"
import profile from "../../assets/profile/VKS.jpg"
import "../../components/template.css"
import Template from "../../components/layout"
import { NAVRender, AboveNav } from "../../components/methods"

const navData = [
  { link: "/Dr-Vishal-Krishna-Singh/", value: "Home" },
  { link: "/Dr-Vishal-Krishna-Singh/education", value: "Education" },
  { link: "/Dr-Vishal-Krishna-Singh/publications", value: "Publications" },
  { link: "/Dr-Vishal-Krishna-Singh/experience", value: "Experience" },
  { link: "/Dr-Vishal-Krishna-Singh/course", value: "Course" },
  { link: "/Dr-Vishal-Krishna-Singh/contact", value: "Contact" },
]
const faculty = { name: "Dr. Vishal Krishna Singh", photo: profile }
const lists = [{ head: "Reasearch Interests", list: vks.interests }]

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
