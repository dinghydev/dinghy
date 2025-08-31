import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EMPLOYEES = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.employees;',
  _width: 58.199999999999996,
  _height: 60,
}

export function Employees(props: DiagramNodeProps) {
  return (
    <Shape {...EMPLOYEES} {...props} _style={extendStyle(EMPLOYEES, props)} />
  )
}
