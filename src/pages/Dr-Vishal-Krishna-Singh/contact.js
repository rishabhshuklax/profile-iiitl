import React from "react"
import { vks } from "../../Data/FacultyData"
import "../../components/template.css"
import { ListGenerator, ParaList } from "../../components/methods"
import Layout from "../../components/VKS/Layout"

const lists = [{ head: "Contact", list: vks.contact }]

class Experience extends React.Component {
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
export default Experience
