import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PERMANENT_MAGNET = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.permanent_magnet',
  _width: 20,
  _height: 70,
}

export function PermanentMagnet(props: DiagramNodeProps) {
  return <Shape {...PERMANENT_MAGNET} {...props} />
}
