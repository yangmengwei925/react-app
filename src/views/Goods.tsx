import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styles from './Goods.module.scss';
let Goods: React.FC = (props) => {
 
  return (<>
   
    }
  </>

  );
}
const mapStateToProps = (state: any) => {
  return {
 
  }
}
const mapDispatchToProps = (dispatch: Function) => {
  return {
  
    // getAddCart:(goodsId:string,number:string,productId:string)=>{
    //   return dispatch(addCartAction(goodsId,number,productId))
    // }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Goods);
