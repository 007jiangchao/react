
import React from "react"
export default (props) => {
    console.log(props)
    return (
        <div>
            {props.name}
            {Array.isArray(props.children) ? props.children[1] : props.children }
        </div>
    )
}