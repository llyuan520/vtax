/**
 * author       : liuliyuan
 * createTime   : 2017/12/6 14:38
 * description  :
 */
import React,{Component} from 'react';
import {  Form,Select,Spin } from 'antd';

const Option = Select.Option;
const FormItem = Form.Item;
class SelectSearch extends Component {
    state = {
        data:[
            {
                uuid:1,
                suppliersName:'select outp 1'
            },{
                uuid:2,
                suppliersName:'select outp 2'
            },{
                uuid:3,
                suppliersName:'select outp 3'
            },{
                uuid:4,
                suppliersName:'select outp 4'
            }
        ],
        coreCompanyLoaded:true
    }

    handleChange = (value) => {
        this.setState({
            value ,
            coreCompanyLoaded:false
        },()=>{
            setTimeout(()=>{
                this.setState(prevState=>({
                    coreCompanyLoaded:true
                }))
            },2000)
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        return (
            <Form onSubmit={this.handleSubmit} className="from-search">
                <FormItem
                    {...formItemLayout}
                    label="切换组织"
                >
                    <Spin size='small' spinning={!this.state.coreCompanyLoaded}>
                        {getFieldDecorator('select', {
                        })(
                            <Select
                                showSearch
                                placeholder="请选择供应商"
                                optionFilterProp="children"
                                notFoundContent="无法找到"
                                searchPlaceholder="输入关键词"
                                onChange={this.handleChange}
                            >
                                {
                                    this.state.data.map(d => <Option key={d.uuid}>{d.suppliersName}</Option>)
                                }
                            </Select>
                        )}
                    </Spin>
                </FormItem>
            </Form>
        )
    }
}

export default Form.create()(SelectSearch)