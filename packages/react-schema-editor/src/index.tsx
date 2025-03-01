import React from 'react'
import { Button, Icon, Row, Col } from 'antd'
import { SchemaTree } from './components/SchemaTree'
import { SchemaCode } from './components/SchemaCode'

import 'antd/dist/antd.css'

export const SchemaEditor: React.FC<{
  schema: any
  onChange: (schema: any) => void
}> = ({ schema, onChange }) => {
  return (
    <div className="schema-editor">
      <div className="schema-menus">
        <Button type="primary">快速生成</Button>
        <Button className="schema-preview-btn">
          <Icon type="success"></Icon>预览
        </Button>
      </div>
      <Row className="schema-editor-main">
        <Col span={14} className="schema-col schema-tree splitter">
          <SchemaTree schema={schema} onChange={onChange} />
        </Col>
        <Col span={10} className="schema-col schema-code">
          <SchemaCode schema={schema} onChange={onChange}></SchemaCode>
        </Col>
      </Row>
    </div>
  )
}
