import React from "react"
import { aP } from "../../Data/FacultyData"
import "../../components/template.css"
import { ListGenerator, ArrayOfObjectsList } from "../../components/methods"
import Layout from "../../components/AP"

const lists = [{ head: "Research Interests:", list: aP.interests }]

class Sushil extends React.Component {
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
export default Sushil
