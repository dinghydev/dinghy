import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PORTS = {
  _style: {
    entity: 'whiteSpace=wrap;align=center;html=1;',
  },
  _width: 0,
  _height: 160,
}

export function Ports(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PORTS)} />
}
