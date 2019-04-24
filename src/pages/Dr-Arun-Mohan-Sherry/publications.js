import React from "react"
import { dir } from "../../Data/FacultyData"
import "../../components/template.css"
import { ArrayOfObjects } from "../../components/methods"
import Layout from "../../components/AMS"

class Publications extends React.Component {
  render() {
    return (
      <Layout>
        <div className="faculty-interest">
          <ArrayOfObjects
            data={{ list: dir.journalData }}
            other={{ head: "Publications:", className: "" }}
          />
        </div>
      </Layout>
    )
  }
}
export default Publications
