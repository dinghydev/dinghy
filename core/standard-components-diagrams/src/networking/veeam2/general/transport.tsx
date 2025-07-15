import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TRANSPORT = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.transport;',
  _width: 38,
  _height: 23,
}

export function Transport(props: DiagramNodeProps) {
  return <Shape {...TRANSPORT} {...props} />
}
