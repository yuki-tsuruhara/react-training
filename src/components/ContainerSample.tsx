import React from 'react'

type ContainerProps = {
  title: string
  children: React.ReactNode
}

const ContainerSample = (props: ContainerProps) => {
  const { title, children } = props
  return (
    <div style={{ background: 'red' }}>
      <span>{title}</span>
      <div>{children}</div>
    </div>
  )
}

const Parent = (): JSX.Element => {
  return (
    <ContainerSample title="Hello">
      <p>ここが背景色で囲まれます</p>
    </ContainerSample>
  )
}

export default Parent
