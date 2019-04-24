import React from "react"
import { aP } from "../../Data/FacultyData"
import "../../components/template.css"
import { ListGenerator, ArrayOfObjectsList } from "../../components/methods"
import Layout from "../../components/AP"

const lists = [{ head: "Education", list: aP.education }]

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
