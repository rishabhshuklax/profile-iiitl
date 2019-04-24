import React from "react"
import { bKC } from "../../Data/FacultyData"
import "../../components/template.css"
import { ListGenerator, ArrayOfObjectsList } from "../../components/methods"
import Layout from "../../components/BKC"
const lists = [{ head: "Teachings: ", list: bKC.courses }]

class Course extends React.Component {
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
export default Course
