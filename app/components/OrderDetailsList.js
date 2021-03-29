import { connect } from "react-redux"
import { FlatList, StyleSheet, Text, View } from "react-native"
import React from "react"

import OrderDetailItem from "./OrderDetailItem"

class OrderDetailsList extends React.Component {
  DATA = [
    {
      product: {
        name: "Alambres",
        quantity: "5",
        price: "1.20",
      },
      quantity: 7,
    },
    {
      product: {
        name: "Alambres 2",
        quantity: "8",
        price: "2",
      },
      quantity: 50,
    },
    {
      product: {
        name: "Alambres 3",
        quantity: "20",
        price: "1.10",
      },
      quantity: 3,
    },
  ]

  renderItem({ item }) {
    return <OrderDetailItem item={item} />
  }

  headerListComponent() {
    return (
      <View style={styles.order_detail_header_view}>
        <Text style={styles.order_detail_header_title}>PRODUCTOS</Text>
      </View>
    )
  }

  render() {
    return (
      <View>
        {this.headerListComponent()}
        <FlatList
          data={this.DATA}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.product.name.toString()}
          ItemSeparatorComponent={() => (
            <View style={{ height: 1, backgroundColor: "#56bef4" }} />
          )}
          style={styles.order_details_list}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  order_detail_header_view: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderTopColor: "#a9a9a9",
    borderTopWidth: 1.6,
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  order_detail_header_title: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
  },
  order_details_list: {
    height: 160,
  },
})

export default connect()(OrderDetailsList)
