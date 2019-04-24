import React from "react"
import { somendu } from "../../Data/FacultyData"
import "../../components/template.css"
import { ListGenerator } from "../../components/methods"
import Layout from "../../components/somendu"

const lists = [
  { head: "Technical Committee Member:", list: somendu.member },
  { head: "Reviewer for:", list: somendu.reviewer },
]

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
