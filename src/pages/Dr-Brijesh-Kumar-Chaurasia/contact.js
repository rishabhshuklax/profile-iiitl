import React from "react"
import { bKC } from "../../Data/FacultyData"
import "../../components/template.css"
import Layout from "../../components/BKC"
import { ParaList } from "../../components/methods"

const lists = [{ head: "Contact", list: bKC.contact }]

class Contact extends React.Component {
  render() {
    return (
      <Layout>
        <div className="faculty-interest">
          {lists.map((v, i) => (
            <ParaList data={v} key={i} />
          ))}
        </div>
      </Layout>
    )
  }
}
export default Contact
