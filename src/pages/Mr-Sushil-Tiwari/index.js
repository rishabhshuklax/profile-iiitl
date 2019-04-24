import React from "react"
import { sushilTiwari } from "../../Data/FacultyData"
import "../../components/template.css"
import { ListGenerator, ArrayOfObjects } from "../../components/methods"
import Layout from "../../components/ST"

const lists = [
  { head: "Reasearch Interests", list: sushilTiwari.interests },
  { head: "Publications", list: sushilTiwari.journalData },
  { head: "Conference", list: sushilTiwari.conference },
]

class Sushil extends React.Component {
  render() {
    return (
      <Layout>
        <div className="faculty-interest">
          {lists.map((v, i) => (
            <ListGenerator data={v} key={i} />
          ))}
          <ArrayOfObjects
            data={{ list: sushilTiwari.awards }}
            other={{ head: "Latest Achievements", className: "" }}
          />
        </div>
      </Layout>
    )
  }
}
export default Sushil
