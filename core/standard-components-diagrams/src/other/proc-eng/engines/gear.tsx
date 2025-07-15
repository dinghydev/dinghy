import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GEAR = {
  _style:
    'dashed=0;outlineConnect=0;align=center;html=1;shape=mxgraph.pid.engines.gear;fontSize=45;',
  _width: 100,
  _height: 100,
}

export function Gear(props: DiagramNodeProps) {
  return <Shape {...GEAR} {...props} />
}
