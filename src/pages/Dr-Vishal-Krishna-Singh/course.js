import React from "react"
import { vks } from "../../Data/FacultyData"
import "../../components/template.css"
import { ListGenerator } from "../../components/methods"
import Layout from "../../components/VKS/Layout"

const lists = [{ head: "Teachings", list: vks.courses }]

class Experience extends React.Component {
  render() {
    return (
      <Layout>
        <div className="faculty-interest">
          {lists.map((v, i) => (
            <ListGenerator data={v} key={i} />
          ))}
        </div>
      </Layout>
    )
  }
}
export default Experience
