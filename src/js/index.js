var React = require('react');
var ReactDOM = require('react-dom');

var Container = React.createClass({
    getInitialState: function() {
        return {
            'anotherTitle': '默认标题'
        };
    },
    render: function() {
        return (
            <div>
                <AnotherTest anotherCallback={this.anotherChangeHandler} />
                <Test anotherTitle={this.state.anotherTitle}/>
            </div>
        )
    },
    anotherChangeHandler(content) {
        this.setState({
            'anotherTitle': content
        });
    }
});

var AnotherTest = React.createClass({
    title: '标题nnnnn',
    render: function() {
        return (
            <div onClick={this.props.anotherCallback.bind(this, this.title)}>这是另外一个组件</div>
        );
    }
});

var Test = React.createClass({
    testValue: 1,

    render: function() {
        return (
            <div>
                这里是父组件{this.props.anotherTitle}
                <ChildTest parentId={100} childrendCallback={this.childrendCallback}/>
            </div>
        );
    },

    childrendCallback: function(id) {
        this.testValue = id;
        console.log(this.testValue);
    }
});

var ChildTest = React.createClass({
    render: function() {
        return (
            <ul>
                <li onClick={this.props.childrendCallback.bind(this, 1)}>父组件id: {this.props.parentId} 子组件数据1</li>
                <li onClick={this.props.childrendCallback.bind(this, 2)}>父组件id: {this.props.parentId} 子组件数据2</li>
                <li onClick={this.props.childrendCallback.bind(this, 3)}>父组件id: {this.props.parentId} 子组件数据3</li>
            </ul>
        );
    }
});

// ReactDOM.render(<AnotherTest />, document.body);
ReactDOM.render(<Container />, document.getElementById('container'));