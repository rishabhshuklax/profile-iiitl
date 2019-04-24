import React from "react"
import { sushilTiwari } from "../../Data/FacultyData"
import "../../components/template.css"
import { ParaList } from "../../components/methods"
import Layout from "../../components/ST"

const lists = [{ head: "Contact", list: sushilTiwari.contact }]

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
