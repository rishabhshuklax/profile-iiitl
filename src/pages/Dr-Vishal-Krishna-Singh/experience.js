import React from "react"
import { vks } from "../../Data/FacultyData"
import "../../components/template.css"
import { ListGenerator } from "../../components/methods"
import Layout from "../../components/VKS/Layout"

const lists = [
  { head: "Technical Committee Member:", list: vks.member },
  { head: "Reviewer for:", list: vks.reviewer },
]

class Experience extends React.Component {
  render() {
    return (
      <Layout>
        {/* <div className="faculty-experience-head faculty-section-head">
          Proffessional Activities:
        </div> */}
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
