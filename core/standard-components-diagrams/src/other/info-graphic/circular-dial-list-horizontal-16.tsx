import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CIRCULAR_DIAL_LIST_HORIZONTAL_16 = {
  _style: {
    entity:
      'verticalLabelPosition=middle;verticalAlign=middle;html=1;fillColor=#EEEEEE;strokeColor=none;fontSize=10;align=left;fontStyle=0;rounded=1;whiteSpace=wrap;arcSize=8;spacing=5;',
  },
  _original_width: 10,
  _original_height: 260,
}

export function CircularDialListHorizontal16(props: DiagramNodeProps) {
  return (
    <Shape
      {...CIRCULAR_DIAL_LIST_HORIZONTAL_16}
      {...props}
      _style={extendStyle(CIRCULAR_DIAL_LIST_HORIZONTAL_16, props)}
    />
  )
}
