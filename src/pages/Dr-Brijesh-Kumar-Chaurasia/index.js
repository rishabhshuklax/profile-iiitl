import React from "react"
import { bKC } from "../../Data/FacultyData"
import "../../components/template.css"
import { ListGenerator, ArrayOfObjectsList } from "../../components/methods"
import Layout from "../../components/BKC"

const lists = [{ head: "Research Interests:", list: bKC.interests }]

class Sushil extends React.Component {
  render() {
    return (
      <Layout>
        <div className="faculty-interest">
          {lists.map((v, i) => (
            <ListGenerator data={v} key={i} />
          ))}
          <ArrayOfObjectsList
            data={{ list: bKC.awards }}
            other={{ head: "Latest Achievements", className: "" }}
          />
        </div>
      </Layout>
    )
  }
}
export default Sushil
