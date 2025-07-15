import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLUTCH_2 = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.rot_mech.clutch_2;pointerEvents=1;',
  _width: 90,
  _height: 60,
}

export function Clutch2(props: DiagramNodeProps) {
  return <Shape {...CLUTCH_2} {...props} />
}
