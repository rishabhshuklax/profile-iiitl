import React from "react"
import { shikha } from "../../Data/FacultyData"
import "../../components/template.css"
import { ListGenerator } from "../../components/methods"
import Layout from "../../components/SG"

const lists = [
  { head: "Reasearch Interests", list: shikha.interests },
  { head: "Publications", list: shikha.journalData },
]

class Shikha extends React.Component {
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
export default Shikha
