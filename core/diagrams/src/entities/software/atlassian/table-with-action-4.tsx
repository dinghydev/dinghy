import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TABLE_WITH_ACTION_4 = {
  _style: {
    entity: 'shape=line;strokeWidth=2;html=1;strokeColor=#3384FF;resizeWidth=1',
  },
  _width: 5,
  _height: 30,
}

export function TableWithAction4(props: NodeProps) {
  return (
    <Shape
      {...TABLE_WITH_ACTION_4}
      {...props}
      _style={extendStyle(TABLE_WITH_ACTION_4, props)}
    />
  )
}
