import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SCROLLSPY_2 = {
  _style: {
    entity:
      'fillColor=none;strokeColor=none;perimeter=none;whiteSpace=wrap;fontColor=#212529;html=1;align=left;verticalAlign=top;spacingRight=25;',
  },
  _width: 1,
  _height: 300,
}

export function Scrollspy2(props: DiagramNodeProps) {
  return (
    <Shape
      {...SCROLLSPY_2}
      {...props}
      _style={extendStyle(SCROLLSPY_2, props)}
    />
  )
}
