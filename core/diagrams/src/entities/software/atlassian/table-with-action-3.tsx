import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TABLE_WITH_ACTION_3 = {
  _style: {
    entity: 'shape=line;strokeWidth=2;html=1;strokeColor=#DFE1E5;resizeWidth=1',
  },
  _width: 4,
  _height: 30,
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
