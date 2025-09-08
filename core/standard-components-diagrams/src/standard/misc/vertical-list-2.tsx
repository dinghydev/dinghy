import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VERTICAL_LIST_2 = {
  _style: {
    entity:
      'text;html=1;strokeColor=none;fillColor=none;whiteSpace=wrap;align=center;verticalAlign=middle;fontColor=#0000EE;fontStyle=4;',
  },
  _original_width: 0,
  _original_height: 40,
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
