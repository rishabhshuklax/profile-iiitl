import React from "react"
import { Link } from "gatsby"
// import profile from "../../assets/profile/VKS.jpg"
import "./template.css"

class Template extends React.Component {
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
            <div>
              <h2 className="faculty-above-nav-head-name">{props.data.name}</h2>
              <p className="faculty-above-nav-head-dept faculty-above-nav-item">
                Department of Information Technology
              </p>
              <p className="faculty-above-nav-head-institute faculty-above-nav-item">
                Indian Institute of Information Technology, Lucknow,UP,India
              </p>
            </div>
          </div>
          <div className="above-nav-section-2">
            <img src={props.faculty.photo} alt="VKS" />
          </div>
        </div>
      </div>
    )
  }
  ListGenerator = props => {
    let list = props.data.list.map((val, i) => <li key={i}>{val}</li>)
    return (
      <div className="faculty-interest-section-1">
        <h2 className="faculty-interest-head faculty-section-head">
          {props.data.head}
        </h2>
        <div className="faculty-interest-list">
          <ul>{list}</ul>
        </div>
      </div>
    )
  }
  ArrayOfObjects = props => {
    let list = props.data.list.map((val, i) => {
      return (
        <li className="faculty-award-inner">
          {val.head === "" ? (
            ""
          ) : (
            <h2 className="faculty-award-head" key={i}>
              {val.head}
            </h2>
          )}
          <div className="faculty-award-detail" key={i}>
            {val.detail}
          </div>
        </li>
      )
    })
    return (
      <div className={props.other.className}>
        <h2 className="faculty-section-head">{props.other.head}</h2>
        <ul>{list}</ul>
      </div>
    )
  }
  render() {
    return <div className="padding-res">{this.props.children}</div>
  }
}
export default Template
