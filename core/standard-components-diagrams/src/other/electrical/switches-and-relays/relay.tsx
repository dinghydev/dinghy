import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RELAY = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.relay;',
  _width: 100,
  _height: 50,
}

export function Relay(props: DiagramNodeProps) {
  return <Shape {...RELAY} {...props} />
}
