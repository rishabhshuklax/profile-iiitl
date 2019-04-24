import React from "react"
import { dir } from "../../Data/FacultyData"
import "../../components/template.css"
import { ArrayOfObjects } from "../../components/methods"
import Layout from "../../components/AMS"

class Sushil extends React.Component {
  render() {
    return (
      <Layout>
        <div className="faculty-interest">
          <ArrayOfObjects
            data={{ list: dir.awards }}
            other={{ head: "Latest Achievements:", className: "" }}
          />
        </div>
      </Layout>
    )
  }
}
export default Sushil
