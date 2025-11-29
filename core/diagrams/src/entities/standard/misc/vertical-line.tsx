import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VERTICAL_LINE = {
  _style: {
    entity: 'line;strokeWidth=2;direction=south;html=1;',
  },
  _width: 10,
  _height: 160,
}

export function VerticalLine(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VERTICAL_LINE)} />
}
