import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VIRTUAL_PRIVATE_CLOUD = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.virtual_private_cloud;fillColor=#F58534;gradientColor=none;',
  },
  _width: 79.5,
  _height: 54,
}

export function VirtualPrivateCloud(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VIRTUAL_PRIVATE_CLOUD)} />
}
