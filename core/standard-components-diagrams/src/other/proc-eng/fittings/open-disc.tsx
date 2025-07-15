import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OPEN_DISC = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.open_disc;',
  _width: 40,
  _height: 140,
}

export function OpenDisc(props: DiagramNodeProps) {
  return <Shape {...OPEN_DISC} {...props} />
}
