import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const REACTOR = {
  _style:
    'shape=mxgraph.pid.vessels.reactor;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 40,
  _height: 95,
}

export function Reactor(props: DiagramNodeProps) {
  return <Shape {...REACTOR} {...props} />
}
