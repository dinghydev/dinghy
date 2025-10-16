import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TELEPHONE_3 = {
  _style: {
    entity:
      'shape=mxgraph.signs.tech.telephone_3;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 74,
  _height: 101,
}

export function Telephone3(props: DiagramNodeProps) {
  return (
    <Shape
      {...TELEPHONE_3}
      {...props}
      _style={extendStyle(TELEPHONE_3, props)}
    />
  )
}
