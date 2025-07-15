import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SQUIB_IGNITOR = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.squib_ignitor',
  _width: 100,
  _height: 100,
}

export function SquibIgnitor(props: DiagramNodeProps) {
  return <Shape {...SQUIB_IGNITOR} {...props} />
}
