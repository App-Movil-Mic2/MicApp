import { connect } from "react-redux"
import React from "react"
import { FlatList } from "react-native"

import BusinessPartnerItem from "./BusinessPartnerItem"

class BusinessPartnersList extends React.Component {
  DATA = [
    {
      name: "Luis Moyón",
      phone_number: "0994123703",
      cash: "50.20",
    },
    {
      name: "Empresa SA",
      phone_number: "+593965432752",
      cash: "50.20",
    },
    {
      name: "Juan Piguavé",
      phone_number: "0994123703",
      cash: "50.20",
    },
    {
      name: "María Luz Iglesias",
      phone_number: "+593965432752",
      cash: "50.20",
    },
    {
      name: "Carro SA",
      phone_number: "0994123703",
      cash: "50.20",
    },
    {
      name: "Empresa 3",
      phone_number: "+593965432752",
      cash: "50.20",
    },
  ]

  renderItem({ item }) {
    return <BusinessPartnerItem item={item} />
  }

  render() {
    return (
      <FlatList
        data={this.DATA}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.name.toString()}
      />
    )
  }
}

export default connect()(BusinessPartnersList)
