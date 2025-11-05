import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ICON39 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.icon39;',
  },
  _width: 36,
  _height: 50,
}

export function Icon39(props: NodeProps) {
  return <Shape {...ICON39} {...props} _style={extendStyle(ICON39, props)} />
}
