import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NAC = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.nac;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Nac(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, NAC)} />
}
