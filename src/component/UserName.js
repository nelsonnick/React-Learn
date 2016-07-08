import React from "react"
export default class UserName extends React.Component {
    constructor(props){
        super(props)
    }
    render() {//开头花括号一定要和小括号隔一个空格，否则识别不出来；标签前一半一定要和return一行
        return <div>
            当前用户： {this.props.name}
        </div>;
    }
}

//es6 这两个属性不能写在class内。
UserName.defaultProps = {//设置默认属性
    name: '用户名未设置'
}

UserName.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    name: React.PropTypes.required
}