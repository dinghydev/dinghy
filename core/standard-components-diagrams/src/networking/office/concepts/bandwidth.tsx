import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BANDWIDTH = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.bandwidth;',
  _width: 45,
  _height: 45,
}

export function Bandwidth(props: DiagramNodeProps) {
  return <Shape {...BANDWIDTH} {...props} />
}
