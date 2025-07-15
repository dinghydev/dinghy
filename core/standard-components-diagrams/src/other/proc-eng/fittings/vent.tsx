import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VENT = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.vent;',
  _width: 80,
  _height: 140,
}

export function Vent(props: DiagramNodeProps) {
  return <Shape {...VENT} {...props} />
}
