import React from 'react'
import { useDispatch } from 'react-redux'
import {actionCreators} from "../state/index"

function Bank() {
  const dispatch = useDispatch();

  return (
    <div>
        <button className="btn btn-danger mx-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}> - </button>
            Change Balance
        <button className="btn btn-success mx-2" onClick={()=>{dispatch(actionCreators.depositMoney(200))}}> + </button>

    </div>
  )
}

export default Bank