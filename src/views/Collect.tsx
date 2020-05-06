import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styles from './Collect.module.scss'
import { myTouch } from '../utils/touch'
import Headers from '../components/headerBar'
//接口
interface dispatchType{
  getCollectList:Function,
  removeItem:Function
}
interface stateType{
  list: Array<{
    id: string,
    [key: string]: number | string
  }>
}
let Collect: React.FC <dispatchType & stateType> = (props) => {
  // 声明周期
  useEffect(() => {
    props.getCollectList()
  }, [])
  useEffect(() => {
    let itemList = document.querySelectorAll(".item");
    if (itemList.length > 0) {
      Array.from(itemList).forEach(item => {
        myTouch.swiper(item, "left", () => {
          item.classList.add("l");
          item.classList.remove("r");
        })
        myTouch.swiper(item, "right", () => {
          item.classList.add("r");
          item.classList.remove("l");
        })
      })
    }
  }, [props.list])
  return (
    <div className={styles.Collect}>
       <Headers title="easyLikeGoods"></Headers>
          <div className={styles.collectList} id="list">
            {
              props.list.map((item)=>{
                return (
                  <div className={styles.touchClear + 'item'} key={item.id}>
                    <div className={styles.test}>
                        <div className={styles.collectItem}>
                        <img src={item.list_pic_url + ""} alt="" className={styles.collectImg} />
                        
                        </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
  
  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
  
  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Collect)
