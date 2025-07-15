import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BLIND_DISC = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.blind_disc2;',
  _width: 40,
  _height: 140,
}

export function BlindDisc(props: DiagramNodeProps) {
  return <Shape {...BLIND_DISC} {...props} />
}
