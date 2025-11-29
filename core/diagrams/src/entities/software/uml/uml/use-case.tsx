import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const USE_CASE = {
  _style: {
    entity: 'ellipse;whiteSpace=wrap;html=1;',
  },
  _width: 140,
  _height: 70,
}

export function UseCase(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, USE_CASE)} />
}
