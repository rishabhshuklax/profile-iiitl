import React from "react"
import { shikha } from "../../Data/FacultyData"
import "../../components/template.css"
import { ListGenerator } from "../../components/methods"
import Layout from "../../components/SG"

const lists = [
  { head: "Publications", list: shikha.journalData },
  {
    head: "Two research papers are under review in international journal:",
    list: shikha.review,
  },
  { head: "Books:", list: shikha.books },
]

class Publications extends React.Component {
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
export default Publications
