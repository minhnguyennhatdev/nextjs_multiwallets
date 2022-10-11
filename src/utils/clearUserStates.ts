import { resetUserState } from './resetUserState';
import { Dispatch } from '@reduxjs/toolkit'

export const clearUserStates = (dispatch: Dispatch<any>, chainId?: number, isDeactive = false) => {
  dispatch(resetUserState({ chainId }))
  // Only clear localStorage when user disconnect,switch address no need clear it.
  if (isDeactive) {
  }
}
