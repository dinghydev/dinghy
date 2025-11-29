import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NGIPS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.ngips;',
  },
  _width: 35.5,
  _height: 42.5,
}

export function Ngips(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, NGIPS)} />
}
