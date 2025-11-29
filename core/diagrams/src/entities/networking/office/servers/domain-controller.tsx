import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DOMAIN_CONTROLLER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.domain_controller;',
  },
  _original_width: 45,
  _original_height: 55,
}

export function DomainController(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DOMAIN_CONTROLLER)} />
}
