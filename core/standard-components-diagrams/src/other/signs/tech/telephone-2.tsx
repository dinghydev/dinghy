import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TELEPHONE_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.tech.telephone_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 36,
  _height: 98,
}

export function Telephone2(props: DiagramNodeProps) {
  return (
    <Shape
      {...TELEPHONE_2}
      {...props}
      _style={extendStyle(TELEPHONE_2, props)}
    />
  )
}
