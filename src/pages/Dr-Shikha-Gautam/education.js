import React from "react"
import { shikha } from "../../Data/FacultyData"
import "../../components/template.css"
import { ListGenerator } from "../../components/methods"
import Layout from "../../components/SG"

const lists = [{ head: "Education", list: shikha.education }]

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
