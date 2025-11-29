import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HORIZONTAL_LINE = {
  _style: {
    entity: 'line;strokeWidth=2;html=1;',
  },
  _width: 160,
  _height: 10,
}

export function HorizontalLine(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, HORIZONTAL_LINE)} />
}
