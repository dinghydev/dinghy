import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TABLE_WITH_ACTION_3 = {
  _style: {
    entity: 'shape=line;strokeWidth=2;html=1;strokeColor=#DFE1E5;resizeWidth=1',
  },
  _width: 4,
  _height: 30,
}

export function TableWithAction3(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TABLE_WITH_ACTION_3)} />
}
