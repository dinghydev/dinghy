import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INDICATOR = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.indicator',
  _width: 60,
  _height: 60,
}

export function Indicator(props: DiagramNodeProps) {
  return <Shape {...INDICATOR} {...props} />
}
