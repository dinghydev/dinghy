import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TABLE_WITH_ACTION_2 = {
  _style: {
    entity:
      'html=1;fillColor=none;strokeColor=none;fontSize=11;align=left;fontColor=#596780;fontStyle=1;whiteSpace=wrap',
  },
  _original_width: 1,
  _original_height: 30,
}

export function TableWithAction2(props: DiagramNodeProps) {
  return (
    <Shape
      {...TABLE_WITH_ACTION_2}
      {...props}
      _style={extendStyle(TABLE_WITH_ACTION_2, props)}
    />
  )
}
