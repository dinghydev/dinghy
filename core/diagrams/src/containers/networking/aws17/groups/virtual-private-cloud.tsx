import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VIRTUAL_PRIVATE_CLOUD = {
  _style: {
    container:
      'dashed=0;html=1;shape=mxgraph.aws3.virtual_private_cloud;fillColor=#F58536;gradientColor=none;dashed=0;',
    entity: {
      fillColor: '#F58536',
    },
  },
}

export function VirtualPrivateCloud(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIRTUAL_PRIVATE_CLOUD}
      {...props}
      _style={extendStyle(VIRTUAL_PRIVATE_CLOUD, props)}
    />
  )
}
