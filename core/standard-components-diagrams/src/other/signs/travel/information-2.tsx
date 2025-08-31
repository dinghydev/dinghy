import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INFORMATION_2 = {
  _style:
    'shape=mxgraph.signs.travel.information_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 59,
  _height: 98,
}

export function Information2(props: DiagramNodeProps) {
  return (
    <Shape
      {...INFORMATION_2}
      {...props}
      _style={extendStyle(INFORMATION_2, props)}
    />
  )
}
