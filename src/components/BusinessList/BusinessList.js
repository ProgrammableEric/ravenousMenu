import React from 'react'
import './BusinessList.css';
import Business from '../Business/Business'

class BusinessList extends React.Component {
    render() {
        return (        
            <div className="BusinessList">
                { this.props.businesses.map((business) => {
                    return <Business business={business} key={business.id}/>
                }
                )}
            </div>
        )
    }
}

export default BusinessList; 

/* 

importance of using "key" attribute in <li> : Help identify corrent elements for virtual DOM rendering. 
https://www.jianshu.com/p/a4ac355ab48c
https://juejin.im/entry/5ce75a9151882532df70ae2f
e.g. 
    //tree1
    <ul>
        <li>1</li>
        <li>2</li>
    </ul>
    // tree 2
    <ul>
        <li>1</li>
        <li>3</li>
        <li>2</li>
    </ul>

    React will do delete -> insert -> insert 
    But we want it to insert directly. 

    //tree1
    <ul>
        <li key='1'>1</li>
        <li key='2'>2</li>
    </ul>
    //tree 2
    <ul>
        <li key='1'>1</li>
        <li key='3'>3</li>
        <li key='2'>2</li>
    </ul>

    less expensive computationally in this way. React will insert <li>3</li> directly to virtual DOM. 
    我们用key的真实目的是为了标识在前后两次渲染中元素的对应关系，防止发生不必要的更新操作。

    key是给每一个vnode的唯一id,可以依靠key,更准确, 更快的拿到oldVnode中对应的vnode节点，高效和准确的更新节点
*/