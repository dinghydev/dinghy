import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HDFS_CLUSTER = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.hdfs_cluster;fillColor=#F58534;gradientColor=none;',
  },
  _original_width: 61.5,
  _original_height: 63,
}

export function HdfsCluster(props: NodeProps) {
  return (
    <Shape
      {...HDFS_CLUSTER}
      {...props}
      _style={extendStyle(HDFS_CLUSTER, props)}
    />
  )
}
