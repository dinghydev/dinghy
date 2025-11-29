import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const APIC = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.apic;',
  },
  _original_width: 50,
  _original_height: 40.5,
}

export function Apic(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, APIC)} />
}
