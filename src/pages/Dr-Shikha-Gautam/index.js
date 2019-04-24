import React from "react"
import { vks } from "../../Data/FacultyData"
import "../../components/template.css"
import { ListGenerator, ArrayOfObjects } from "../../components/methods"
import Layout from "../../components/VKS/Layout"

const lists = [{ head: "Reasearch Interests", list: vks.interests }]

class VKS extends React.Component {
  render() {
    return (
      <Layout>
        <div className="faculty-interest">
          <ListGenerator data={lists[0]} />
        </div>
        <div className="faculty-awards-global">
          <ArrayOfObjects
            data={{ list: vks.awards }}
            other={{ head: "Latest Achievements", className: "" }}
          />
        </div>
      </Layout>
    )
  }
}
export default VKS
