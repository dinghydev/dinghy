import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NETWORK_SECURITY = {
  _style: {
    entity:
      'shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.network_security;network2IconW=1;network2IconH=0.86;',
  },
  _original_width: 50,
  _original_height: 43,
}

export function NetworkSecurity(props: DiagramNodeProps) {
  return (
    <Shape
      {...NETWORK_SECURITY}
      {...props}
      _style={extendStyle(NETWORK_SECURITY, props)}
    />
  )
}
