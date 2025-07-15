import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SUMMING_JUNCTION = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.flowchart.or;',
  _width: 70,
  _height: 70,
}

export function SummingJunction(props: DiagramNodeProps) {
  return <Shape {...SUMMING_JUNCTION} {...props} />
}
