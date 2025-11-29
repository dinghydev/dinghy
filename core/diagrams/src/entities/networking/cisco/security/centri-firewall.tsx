import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CENTRI_FIREWALL = {
  _style: {
    entity:
      'shape=mxgraph.cisco.security.centri_firewall;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 43,
  _original_height: 62,
}

export function CentriFirewall(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CENTRI_FIREWALL)} />
}
