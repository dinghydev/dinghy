import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VIRTUAL_PRIVATE_CLOUD = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#232F3E;fillColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.virtual_private_cloud;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function VirtualPrivateCloud(props: NodeProps) {
  return (
    <Shape
      {...VIRTUAL_PRIVATE_CLOUD}
      {...props}
      _style={extendStyle(VIRTUAL_PRIVATE_CLOUD, props)}
    />
  )
}
