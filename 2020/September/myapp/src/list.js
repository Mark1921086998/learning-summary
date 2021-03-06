import React from "react";
import Li from './li'
export default class List extends React.Component {
  state={
    edit: false
  }
  componentDidUpdate(){
    
  }
  render() {
    let {data,remove,changeSelect} = this.props;
    let {edit} = this.state
    // console.log(data)
    return <ul className="messageList">
        {data.map((item, index) => {
          return <li key={index} className={edit?"editing":""}>
            <h3>{item.name}</h3>
            <input 
              type="checkbox"
              checked={item.check}
              onChange={({target})=>{
                console.log(target.checked)
                changeSelect(item.id,target.checked)
              }}
              />
            <p onDoubleClick={()=>{
              this.setState({
                edit: true
              })
            }}>{item.content}</p>
            <textarea onBlur={()=>{
                this.setState({
                  edit: false
                })
              }} ></textarea>
            <a onClick={()=>{
              remove(item.id)
            }}>删除</a>
          </li>
        })}
      </ul>
  }
}