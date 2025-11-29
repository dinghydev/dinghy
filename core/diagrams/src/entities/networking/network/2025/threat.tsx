import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const THREAT = {
  _style: {
    entity:
      'shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.threat;network2IconYOffset=-0.0472;network2IconW=1.0625;network2IconH=0.9583;',
  },
  _original_width: 53.125,
  _original_height: 47.915,
}

export function Threat(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, THREAT)} />
}
