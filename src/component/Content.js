import React from 'react'
import TodoList from './TodoList'
import ContentFooter from './ContentFooter'

const Content = () => {
  return (
    <>
        <section className='main'>
            <TodoList/>
        </section>

        <ContentFooter/>
    </>
  )
}

export default Content
