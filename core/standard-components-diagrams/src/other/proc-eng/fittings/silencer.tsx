import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SILENCER = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.silencer;',
  _width: 140,
  _height: 100,
}

export function Silencer(props: DiagramNodeProps) {
  return <Shape {...SILENCER} {...props} />
}
