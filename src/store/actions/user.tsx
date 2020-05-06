import {getUserInfo,uploadAvatar,updateAvatar} from '../../api';
// 我的
export let GetUserInfoAction = () => {
    return async (dispatch: Function) => {
      let res = await getUserInfo();
      console.log(res)
      if (res) {
        dispatch({
          type: "GET_USERINFO_LIST",
          payload: res
        })
      }
    }
  }
  export let uploadAvatarAction = (form: FormData)=>{
    return async (dispatch:Function)=>{
        let data = await uploadAvatar(form);
        console.log(data)
        console.log(data.data)
        if (data.data){
            dispatch({
                type: 'UPLOAD_AVATAR',
                payload: data.data[0].path
            })
        }
    }
}

export let UpdateAvatar = (avatar:string) => {
  return async (dispatch: Function) => {
    let res = await updateAvatar(avatar);
    console.log(res)
    if (res) {
      dispatch({
        type: "GET_UPDATAAVATAR_LIST",
        payload: res
      })
    }
  }
}
