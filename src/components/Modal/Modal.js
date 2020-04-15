import React from 'react';
import logo from '../../assets/soup.png';
import './Modal.css'


class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            readyToNext: false,
        }
        this.nextButtonReady = this.nextButtonReady.bind(this);
        this.nextButtonNotReady = this.nextButtonNotReady.bind(this);
    }

    nextButtonReady(event) {
        if (event.target.value) this.setState({readyToNext: true});
        else this.nextButtonNotReady();
    }

    nextButtonNotReady() {
        this.setState({readyToNext: false});
    }

    // stop event bubbling to overlay component. 
    stopDefault(event) {
        var event = event || window.event;
        if ( event && event.stopPropagation ){
            event.stopPropagation();
        }else{
            event.cancelBubble = true;
        }
    }

    render() {
        const { visible, onClose } = this.props;
        const { readyToNext } = this.state;

        return (
            <div className={`overlay ${visible ? 'visible' : ''}`} onClick={onClose}>
                <div className="container" onClick={this.stopDefault}>
                    <div className="modalHeader">
                        <img className="logo" src={logo} alt="site logo" onClick={this.backToMain}/>
                        <span>Ravenous</span>
                        <a className="closeModal" onClick={onClose}>Close</a>
                    </div>
                    <div className="modalContent">
                        <span>Welcome back!</span>
                        <p>Please enter your registered email or phone number to sign in.</p>
                        <input type="text" placeholder="email or phone number" onChange={this.nextButtonReady}></input>
                        <button className={ readyToNext ? 'readyToNext' : '' }>Next</button>
                        <div className="modalNote">Not a Ravenous member ? <a>Sign up</a></div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Modal;

// 学习DOM 事件流，完成Modal Overlay click 关闭功能
// https://segmentfault.com/a/1190000011951192
// https://zhuanlan.zhihu.com/p/33702436

/* IE 事件冒泡 event bubbling - 更广泛
Netscape event capturing 事件捕获
DOM2 级别事件流：
   1. 事件捕获
   2. 目标阶段
   3. 事件冒泡

捕获阶段:
在捕获阶段的路径中, 捕获器 ( capturer listener ) 会主动捕获事件, 然后触发.
目标阶段:
在这个阶段, 目标节点上的所有监听器会按照绑定的顺序依次地触发.
冒泡阶段:
在这个阶段, 节点上的非捕获监听器会被触发.


不会冒泡的事件
需要注意的是, 有一部分事件是不会冒泡的:
例如 focus, blur, load 事件.
因此它们的监听器必须设置为捕获器才会有效.
    
element.addEventListener(event, function, useCapture)
   useCapture: true 捕获阶段执行， false 冒泡阶段执行

原则：
    从外向内，捕获前进，遇到捕获事件立即执行
    非 target 节点，先捕获再冒泡
    target 节点，按代码书写顺序执行（无论冒泡还是捕获

e.target是实际触发点击事件的元素（可以理解为点击位置最深层的结点）。
e.currentTarget是你绑定click事件的元素，在样例中为ul
*/