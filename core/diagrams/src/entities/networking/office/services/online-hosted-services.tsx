import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ONLINE_HOSTED_SERVICES = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.services.online_hosted_services;',
  },
  _original_width: 56,
  _original_height: 52,
}

export function OnlineHostedServices(props: NodeProps) {
  return (
    <Shape
      {...ONLINE_HOSTED_SERVICES}
      {...props}
      _style={extendStyle(ONLINE_HOSTED_SERVICES, props)}
    />
  )
}
