import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VIRTUAL_PRIVATE_CLOUD = {
  _style: {
    group:
      'dashed=0;html=1;shape=mxgraph.aws3.virtual_private_cloud;fillColor=#F58536;gradientColor=none;dashed=0;',
    entity: {
      fillColor: '#F58536',
    },
  },
}

export function VirtualPrivateCloud(props: DiagramNodeProps) {
  return <Shape {...VIRTUAL_PRIVATE_CLOUD} {...props} />
}
