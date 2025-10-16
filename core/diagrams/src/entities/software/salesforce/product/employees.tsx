import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EMPLOYEES = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.employees;',
  },
  _original_width: 58.199999999999996,
  _original_height: 60,
}

export function Employees(props: DiagramNodeProps) {
  return (
    <Shape {...EMPLOYEES} {...props} _style={extendStyle(EMPLOYEES, props)} />
  )
}
