import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TABLE_WITH_ACTION_2 = {
  _style: {
    entity:
      'html=1;fillColor=none;strokeColor=none;fontSize=11;align=left;fontColor=#596780;fontStyle=1;whiteSpace=wrap',
  },
  _width: 1,
  _height: 30,
}

export function TableWithAction2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TABLE_WITH_ACTION_2)} />
}
