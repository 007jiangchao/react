import React, { Fragment } from 'react';

import PropTypes from 'prop-types'

 function Fun(props) {
    return (
        <Fragment>
            <p>
                {
                    props.name
                }
            </p>
        </Fragment>
    )
}

Fun.prototype = {
    name: PropTypes.string
}
Fun.defaultProps = {
    name: "如果数据我就是默认值 （函数组件）"
}
export default Fun;