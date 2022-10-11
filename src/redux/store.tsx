import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { applyMiddleware, createStore, compose, AnyAction } from 'redux'
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk'
import rootReducer from './reducers/rootReducer'


const middleware = [thunkMiddleware]

const middlewareEnhancer = applyMiddleware(...middleware)
const store = createStore(rootReducer, compose(middlewareEnhancer))
export type StoreState = ReturnType<typeof store.getState>
export type ReduxState = ReturnType<typeof store.getState>
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>
export type RootStore = ReturnType<typeof rootReducer>
export const useAppDispatch = () => useDispatch<TypedDispatch>()
export const useAppSelector: TypedUseSelectorHook<StoreState> = useSelector
export default store
