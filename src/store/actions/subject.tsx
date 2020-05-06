import { subject } from '../../api'

// 接收收据
export let subjectAction = (size: number, page: number) => {
  return async (dispatch: Function) => {
    let res = await subject(size, page);
    console.log(res.data.data)
    if (res.data.data && res.data.data.length > 0) {
      dispatch({
        type: "SUBGECT_REDUCER",
        payload: res.data.data
      })
    }
  }
}
