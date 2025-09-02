import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PORTS = {
  _style: {
    entity: 'whiteSpace=wrap;align=center;html=1;',
  },
  _original_width: 0,
  _original_height: 160,
}

export function Ports(props: DiagramNodeProps) {
  return <Shape {...PORTS} {...props} _style={extendStyle(PORTS, props)} />
}
