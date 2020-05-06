import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styles from './Cart.module.scss';
let Cart: React.FC = (props) => {

  // goodsId, id, number, productId
  //                    id: 111
  // user_id: 16
  // session_id: "1"
  //                      goods_id: 1011004
  // goods_sn: "1011004"
  //                     product_id: 20
  // goods_name: "色织精梳AB纱格纹空调被"
  // market_price: 199
  // retail_price: 199
  //                       number: 1
  // goods_specifition_name_value: ""
  // goods_specifition_ids: ""
  // checked: 1
  // list_pic_url: "http://yanxuan.nosdn.127.net/0984c9388a2c3fd
  // cartTotal:
  // goodsCount: 1
  // goodsAmount: 199
  // checkedGoodsCount: 1
  // checkedGoodsAmount: 199
  return (
    <div className={styles.Cart}>
     
    </div>
  );
}

const mapSateToProps = (state: any) => {
  return {
   
  }
}
const mapDispatchToProps = (dispatch: Function) => {
  return {
    
  }
}
export default connect(mapSateToProps, mapDispatchToProps)(Cart);
