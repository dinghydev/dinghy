import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EMPLOYEES_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.employees2;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Employees2(props: DiagramNodeProps) {
  return (
    <Shape
      {...EMPLOYEES_2}
      {...props}
      _style={extendStyle(EMPLOYEES_2, props)}
    />
  )
}
