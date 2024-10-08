import React from 'react'
import WorkflowButton from './_components/workflow-button'
import Workflows from './_components'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className='flex flex-col  relative '>
        <div className=' sticky top-0 p-4 bg-background/50 backdrop-blur-lg flex items-center justify-between border-b z-10'>
          <h1 className='text-2xl'>Workflows</h1>
          <WorkflowButton />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4  p-5 gap-5'>
          <Workflows />
        </div>
    </div>
  )
}

export default Page
