import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VERTICAL_LIST_2 = {
  _style: {
    entity:
      'text;html=1;strokeColor=none;fillColor=none;whiteSpace=wrap;align=center;verticalAlign=middle;fontColor=#0000EE;fontStyle=4;',
  },
  _width: 0,
  _height: 40,
}

export function VerticalList2(props: DiagramNodeProps) {
  return (
    <Shape
      {...VERTICAL_LIST_2}
      {...props}
      _style={extendStyle(VERTICAL_LIST_2, props)}
    />
  )
}
