import React from "react"
import { bKC } from "../../Data/FacultyData"
import "../../components/template.css"
import { ListGenerator, ArrayOfObjectsList } from "../../components/methods"
import Layout from "../../components/BKC"


class Publications extends React.Component {
  render() {
    return (
      <Layout>
        <div className="faculty-interest">
          {bKC.experience.map((v, i) => (
            <ListGenerator data={v} key={i} />
          ))}
        </div>
      </Layout>
    )
  }
}
export default Publications
