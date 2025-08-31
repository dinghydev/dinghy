import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PORTS = {
  _style: 'whiteSpace=wrap;align=center;html=1;',
  _width: 0,
  _height: 160,
}

export function Ports(props: DiagramNodeProps) {
  return <Shape {...PORTS} {...props} _style={extendStyle(PORTS, props)} />
}
