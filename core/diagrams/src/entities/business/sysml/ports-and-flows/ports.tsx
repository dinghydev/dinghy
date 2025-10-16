import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PORTS = {
  _style: {
    entity: 'whiteSpace=wrap;align=center;html=1;',
  },
  _width: 0,
  _height: 160,
}

export function Ports(props: DiagramNodeProps) {
  return <Shape {...PORTS} {...props} _style={extendStyle(PORTS, props)} />
}
