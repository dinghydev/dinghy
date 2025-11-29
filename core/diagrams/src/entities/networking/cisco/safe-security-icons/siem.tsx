import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SIEM = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.siem;',
  },
  _original_width: 50,
  _original_height: 40.5,
}

export function Siem(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SIEM)} />
}
