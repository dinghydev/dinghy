import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INFORMATION_1 = {
  _style:
    'shape=mxgraph.signs.travel.information_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 60,
  _height: 60,
}

export function Information1(props: DiagramNodeProps) {
  return (
    <Shape
      {...INFORMATION_1}
      {...props}
      _style={extendStyle(INFORMATION_1, props)}
    />
  )
}
