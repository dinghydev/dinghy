import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EMPLOYEES_2 = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.employees2;',
  _width: 60,
  _height: 60,
}

export function Employees2(props: DiagramNodeProps) {
  return <Shape {...EMPLOYEES_2} {...props} />
}
