import React from "react"
import { sushilTiwari } from "../../Data/FacultyData"
import "../../components/template.css"
import { ListGenerator } from "../../components/methods"
import Layout from "../../components/ST"

const lists = [
  { head: "Proffessional Experience", list: sushilTiwari.experience },
]

class Experience extends React.Component {
  render() {
    return (
      <Layout>
        <div className="faculty-interest">
          <ListGenerator data={lists[0]} />
        </div>
      </Layout>
    )
  }
}
export default Experience
