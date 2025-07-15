import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SEGNALO = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.segnalo',
  _width: 80.60000000000001,
  _height: 77.80000000000001,
}

export function Segnalo(props: DiagramNodeProps) {
  return <Shape {...SEGNALO} {...props} />
}
