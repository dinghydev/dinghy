import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RUPTURE_DISC = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.rupture_disc;',
  _width: 50,
  _height: 100,
}

export function RuptureDisc(props: DiagramNodeProps) {
  return <Shape {...RUPTURE_DISC} {...props} />
}
