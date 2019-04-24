import React from "react"
import { somendu } from "../../Data/FacultyData"
import "../../components/template.css"
import { ListGenerator, ArrayOfObjects } from "../../components/methods"
import Layout from "../../components/somendu"

const lists = [
  { head: "Publications", list: somendu.journalData },
  { head: "Conference", list: somendu.conference },
]

class Sushil extends React.Component {
  render() {
    return (
      <Layout>
        <div className="faculty-interest">
          <ArrayOfObjects
            data={{ list: somendu.awards }}
            other={{ head: "Latest Achievements", className: "" }}
          />
          {lists.map((v, i) => (
            <ListGenerator data={v} key={i} />
          ))}
        </div>
      </Layout>
    )
  }
}
export default Sushil
