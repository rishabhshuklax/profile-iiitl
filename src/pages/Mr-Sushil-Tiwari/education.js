import React from "react"
import { sushilTiwari } from "../../Data/FacultyData"
import "../../components/template.css"
import { ListGenerator } from "../../components/methods"
import Layout from "../../components/ST"

const lists = [{ head: "Education", list: sushilTiwari.education }]

class Education extends React.Component {
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
export default Education
