import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TABLE_WITH_ACTION_3 = {
  _style: {
    entity: 'shape=line;strokeWidth=2;html=1;strokeColor=#DFE1E5;resizeWidth=1',
  },
  _original_width: 4,
  _original_height: 30,
}

export function TableWithAction3(props: DiagramNodeProps) {
  return (
    <Shape
      {...TABLE_WITH_ACTION_3}
      {...props}
      _style={extendStyle(TABLE_WITH_ACTION_3, props)}
    />
  )
}
