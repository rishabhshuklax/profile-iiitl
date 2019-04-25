import React from "react"
import profile from "../assets/profile/anonymous.jpg"
import "./template.css"
import Template from "./layout"
import { NAVRender, AboveNav } from "./methods"

const navData = []
const faculty = { name: "Dr. Ashutosh Mishra", photo: profile }

class VKS extends React.Component {
  render() {
    return (
      <Template>
        <AboveNav data={faculty} faculty={faculty} />
        <div className="faculty-nav">
          <div
            style={{ width: "100%", height: "40px" }}
            className="faculty-nav-inner"
          >
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
export default VKS
