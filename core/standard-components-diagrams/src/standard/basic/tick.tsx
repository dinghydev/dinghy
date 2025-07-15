import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TICK = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.tick',
  _width: 85,
  _height: 100,
}

export function Tick(props: DiagramNodeProps) {
  return <Shape {...TICK} {...props} />
}
