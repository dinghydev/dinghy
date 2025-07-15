import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OR = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.flowchart.summing_function;',
  _width: 70,
  _height: 70,
}

export function Or(props: DiagramNodeProps) {
  return <Shape {...OR} {...props} />
}
