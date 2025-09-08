import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TABLE_WITH_ACTION = {
  _style: {
    entity:
      'html=1;fillColor=none;strokeColor=none;fontSize=11;align=left;fontColor=#3384FF;fontStyle=1;whiteSpace=wrap',
  },
  _original_width: 350,
  _original_height: 30,
}

export function TableWithAction(props: DiagramNodeProps) {
  return (
    <Shape
      {...TABLE_WITH_ACTION}
      {...props}
      _style={extendStyle(TABLE_WITH_ACTION, props)}
    />
  )
}
