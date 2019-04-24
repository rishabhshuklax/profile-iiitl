import React from "react"
import { dir } from "../../Data/FacultyData"
import "../../components/template.css"
import {
  ParaList,
} from "../../components/methods"
import Layout from "../../components/AMS"

class Publications extends React.Component {
  render() {
    return (
      <Layout>
        <div className="faculty-interest">
          {dir.experience.map((v, i) => (
            <ParaList data={v} key={i} />
          ))}
        </div>
      </Layout>
    )
  }
}
export default Publications
