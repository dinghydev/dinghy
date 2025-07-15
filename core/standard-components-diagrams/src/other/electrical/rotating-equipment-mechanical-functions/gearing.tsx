import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GEARING = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.rot_mech.gearing;pointerEvents=1;',
  _width: 100,
  _height: 64,
}

export function Gearing(props: DiagramNodeProps) {
  return <Shape {...GEARING} {...props} />
}
