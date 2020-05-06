import React, { useEffect, useState } from 'react';
import styles from './Search.module.scss'
import { connect } from 'react-redux'
import { hotandhistoryAction, helperAction, listAction, removeAction } from '../store/actions/search'
import { RouteComponentProps } from 'react-router-dom'
// 接口
interface dispatchType{
  getSearchInit: Function,
  helper: Function,
  getList: Function,
  removeHistory: Function
}
interface stateType{
  init: {
    defaultKeyword: {
      keyword: string
    },
    historyKeywordList: Array<{
      [key: string]: string | number
    }>
    hotKeywordList: Array<{
      [key: string]: string | number
    }>  
}
helperList: [],
list: {
  goodsList: Array<{
    [key: string]: string | number
  }>
}
}

let Search: React.FC<dispatchType & stateType & RouteComponentProps> = (props) => {
    
  let [keyword, setKeyword] = useState("")
  let [keywords, setKeywords] = useState("")
  let [isShow, setIsShow] = useState(false)
  let [isShows, setIsShows] = useState(false)
  let [listShow, setListShow] = useState(false)
  let [sortShow, setSortShow] = useState(false)
  let [sortimgShow, setSortimgShow] = useState(false)
  let [initsortShow, setInitsortShow] = useState(false)
  let changeValue = (e: any) => {
    setKeyword(e.target.value)
  }
  let clickSearch = (value: string) => {
    setKeywords(value)
    setKeyword(value)
    setSortShow(false)
    setSortimgShow(false)
    // setIsShow(false)
     // eslint-disable-next-line react-hooks/exhaustive-deps
    props.getList(value)
    props.getSearchInit()
  }
  return (
    <div className={styles.Search}>
   {/* 搜索框                          */}
      <div className={styles.searchFix}>
          <div className={styles.Input}>
              <div className={styles.searchInputWrap}>
              <div className={styles.goBack} onClick={() => { props.history.go(-1) }}>
              <i className="iconfont icon-zuojiantou"></i>
            </div>
              <div className={styles.icon}>
              <i className="iconfont icon-fangdajing"></i>
              </div>
              {
              props.init.defaultKeyword && <input type="text"
                value={keyword}
                onChange={changeValue}
                placeholder={props.init.defaultKeyword.keyword + ''}
                className={styles.searchInput} />
            }
             <div className={styles.cancelSearch} onClick={() => { setKeyword("") }}>取消</div>
              </div>
              <ul className={styles.searchList + ` ${isShow ? "" : styles.ulShow} ${listShow ? styles.ulShow : ""} ${isShows ? styles.ulShow : ""}`}>
            {
              props.helperList.map((item, index) => {
                return (
                  <li className={styles.searchItem}
                    onClick={() => { clickSearch(item) }}
                    key={index}>{item}</li>
                )
              })
            }
          </ul>
          </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  console.log(state.search.init)
  return {
    init: state.search.init,
    helperList: state.search.helperList,
    list: state.search.list
  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    getSearchInit(){
      dispatch(hotandhistoryAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
