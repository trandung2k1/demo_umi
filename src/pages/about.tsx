import { Button , message} from 'antd';
import React from 'react'
const About = (): React.ReactElement => {
  const handleClick = () =>{
    message.success('On Click')
  }
  return (
    <div>
      <h1>ABout</h1>
      <Button type='primary' onClick={handleClick}>Click me</Button>
    </div>
  )
}

export default About