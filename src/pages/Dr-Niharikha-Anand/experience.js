import React from "react"
import { niharika } from "../../Data/FacultyData"
import "../../components/template.css"
import { ArrayOfObjects } from "../../components/methods"
import Layout from "../../components/niharika"

class Publications extends React.Component {
  render() {
    return (
      <Layout>
        <div className="faculty-interest">
          <ArrayOfObjects
            data={{ list: niharika.experience }}
            other={{ head: "Proffessional Experience:", className: "" }}
          />
        </div>
      </Layout>
    )
  }
}
export default Publications
