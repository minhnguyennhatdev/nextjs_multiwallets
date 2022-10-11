import Store from './store'

const logger: any = (store: typeof Store) => (next: any) => (action: any) => {
    console.group(action.type)
    console.info('dispatching', action)
    const result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
}

export default logger
