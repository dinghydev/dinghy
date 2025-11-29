import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VIRTUAL_PRIVATE_CLOUD = {
  _style: {
    container:
      'dashed=0;html=1;shape=mxgraph.aws3.virtual_private_cloud;fillColor=#F58536;gradientColor=none;dashed=0;',
    entity: {
      fillColor: '#F58536',
    },
  },
}

export function VirtualPrivateCloud(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VIRTUAL_PRIVATE_CLOUD)} />
}
