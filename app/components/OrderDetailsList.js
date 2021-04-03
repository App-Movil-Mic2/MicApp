import { connect } from "react-redux"
import { FlatList, StyleSheet, Text, View } from "react-native"
import React from "react"

import OrderDetailItem from "./OrderDetailItem"

class OrderDetailsList extends React.Component {
  renderItem({ item }) {
    return (
      <OrderDetailItem
        item={item}
        refreshOrderDetailItem={this.props.refreshOrderDetailItem}
      />
    )
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
          data={this.props.shoppingCart}
          renderItem={(item) => this.renderItem(item)}
          keyExtractor={(item) => item.product.name.toString()}
          ItemSeparatorComponent={() => (
            <View style={{ height: 1, backgroundColor: "#56bef4" }} />
          )}
          style={styles.order_details_list}
          extraData={this.props.refreshOrderDetailItem}
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

export default connect((state) => ({
  shoppingCart: state.shoppingCart.shoppingCart,
  refreshOrderDetailItem: state.ui.refreshOrderDetailItem,
}))(OrderDetailsList)
