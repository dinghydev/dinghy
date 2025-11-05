import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLUSTER = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.emr_cluster;fillColor=#F58534;gradientColor=none;',
  },
  _original_width: 55.5,
  _original_height: 63,
}

export function Cluster(props: NodeProps) {
  return <Shape {...CLUSTER} {...props} _style={extendStyle(CLUSTER, props)} />
}
