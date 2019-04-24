import React from "react"
import { vks } from "../../Data/FacultyData"
import "../../components/template.css"
import { ListGenerator} from "../../components/methods"
import Layout from "../../components/VKS/Layout"

const lists = [{ head: "Education", list: vks.education }]

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
