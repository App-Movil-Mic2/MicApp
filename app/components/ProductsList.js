import { connect } from "react-redux"
import { FlatList } from "react-native"
import React from "react"

import ProductItem from "./ProductItem"

class ProductsList extends React.Component {
  DATA = [
    {
      name: "Alambres",
      quantity: "5",
      price: "1.20",
    },
    {
      name: "Tornillos",
      quantity: "1",
      price: "0.2",
    },
    {
      name: "Alambres 2",
      quantity: "5",
      price: "1.20",
    },
    {
      name: "Tornillos 3",
      quantity: "50",
      price: "0.18",
    },
    {
      name: "Plumas",
      quantity: "26",
      price: "1",
    },
    {
      name: "Martillo",
      quantity: "7",
      price: "5",
    },
    {
      name: "Lapices",
      quantity: "5",
      price: "0.9",
    },
    {
      name: "Tornillos 4",
      quantity: "10",
      price: "0.25",
    },
    {
      name: "Lapices Bic",
      quantity: "30",
      price: "1.05",
    },
    {
      name: "Tornillos 5",
      quantity: "100",
      price: "0.2",
    },
  ]

  renderItem({ item }) {
    return <ProductItem item={item} />
  }

  render() {
    return (
      <FlatList
        data={this.DATA}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.name.toString()}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        numColumns={2}
        horizontal={false}
      />
    )
  }
}

export default connect()(ProductsList)
