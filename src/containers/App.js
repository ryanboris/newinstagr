import React, { useReducer, useContext } from 'react'
import SearchHeader from './SearchHeader'
import PostContainer from './PostContainer'
import dataStore from '../dummy-data'
import PostReducer from '../reducers/PostReducer'

export const PostContainerContext = React.createContext({ dataStore, isEditing: false })

export default function App() {
  const initialState = useContext(PostContainerContext)
  const [state, dispatch] = useReducer(PostReducer, initialState)
  return (
    <>
      <SearchHeader />
      <PostContainerContext.Provider value={{ state, dispatch }}>
        {state.dataStore.map(data => {
          return <PostContainer {...data} />
        })}
      </PostContainerContext.Provider>
    </>
  )
}
