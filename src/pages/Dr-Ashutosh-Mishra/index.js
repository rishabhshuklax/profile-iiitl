import React from "react"
import { aM } from "../../Data/FacultyData"
import "../../components/template.css"
import { ListGenerator, ParaList } from "../../components/methods"
import Layout from "../../components/AM"

const lists = [
  { head: "Research Interests:", list: aM.interests },
  { head: "Education:", list: aM.education },
]
const para = [{ head: "Contact:", list: aM.contact }]

class Sushil extends React.Component {
  render() {
    return (
      <Layout>
        <div className="faculty-interest">
          {lists.map((v, i) => (
            <ListGenerator data={v} key={i} />
          ))}
          {para.map((v, i) => (
            <ParaList data={v} key={i} />
          ))}
        </div>
      </Layout>
    )
  }
}
export default Sushil
