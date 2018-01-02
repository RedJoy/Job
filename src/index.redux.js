const ADD_BABE = '生宝宝';
const REMOVE_BABE = '不要宝宝了';

// reducer
/*
  1.新建store
  通过reducer建立
  根据旧的state和action 生成新的 state
*/
export function counter(state=0,action){
  switch(action.type){
    case ADD_BABE:
      return state+1;
    case REMOVE_BABE:
      return state-1;
    default:
      return 10;
  }
}
// action creator
export function addBabe() {
  return {type:ADD_BABE};
}
export function removeBabe() {
  return {type:REMOVE_BABE};
}