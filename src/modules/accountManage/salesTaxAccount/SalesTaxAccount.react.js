/**
 * author       : liuliyuan
 * createTime   : 2017/12/7 17:13
 * description  :
 */
import React, { Component } from 'react'
import { Layout} from 'antd'
import {Nav} from '../../../compoments/index'
import routes from './routes'

class SalesTaxAccount extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Layout style={{background:'transparent'}} >
                <div style={{ padding: 24}}>
                    <Nav data={routes} />
                </div>
            </Layout>
        )
    }
}
export default SalesTaxAccount