import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TELEPHONE_5 = {
  _style:
    'shape=mxgraph.signs.tech.telephone_5;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 36,
  _height: 98,
}

export function Telephone5(props: DiagramNodeProps) {
  return (
    <Shape
      {...TELEPHONE_5}
      {...props}
      _style={extendStyle(TELEPHONE_5, props)}
    />
  )
}
