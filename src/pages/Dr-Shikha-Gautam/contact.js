import React from "react"
import { shikha } from "../../Data/FacultyData"
import "../../components/template.css"
import { ParaList } from "../../components/methods"
import Layout from "../../components/SG"

const lists = [{ head: "Teachings", list: shikha.contact }]

class Publications extends React.Component {
  render() {
    return (
      <Layout>
        <div className="faculty-interest">
          {lists.map((v, i) => (
            <ParaList data={v} key={i} />
          ))}
        </div>
      </Layout>
    )
  }
}
export default Publications
