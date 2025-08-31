import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LIGHTHOUSE_1 = {
  _style:
    'shape=mxgraph.signs.transportation.lighthouse_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 60,
  _height: 60,
}

export function Lighthouse1(props: DiagramNodeProps) {
  return (
    <Shape
      {...LIGHTHOUSE_1}
      {...props}
      _style={extendStyle(LIGHTHOUSE_1, props)}
    />
  )
}
