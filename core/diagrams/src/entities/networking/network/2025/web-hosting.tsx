import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WEB_HOSTING = {
  _style: {
    entity:
      'shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.web_hosting;network2IconW=1;network2IconH=0.9125;',
  },
  _original_width: 50,
  _original_height: 45.625,
}

export function WebHosting(props: NodeProps) {
  return (
    <Shape
      {...WEB_HOSTING}
      {...props}
      _style={extendStyle(WEB_HOSTING, props)}
    />
  )
}
