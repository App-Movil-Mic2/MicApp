import { connect } from "react-redux"
import { FlatList, View } from "react-native"
import React from "react"

import ShippingAddressItem from "./ShippingAddressItem"

class ShippingAddressesList extends React.Component {
  DATA = [
    {
      name: "Sucursal Norte",
      address: "Guayacanes MZ F-90 V42",
    },
    {
      name: "Sucursal Sur",
      address: "Suburbios MZ F-90 V42",
    },
  ]

  renderItem({ item }) {
    return <ShippingAddressItem item={item} />
  }

  render() {
    return (
      <FlatList
        data={this.DATA}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.name.toString()}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: "#56bef4" }} />
        )}
      />
    )
  }
}

export default connect()(ShippingAddressesList)
