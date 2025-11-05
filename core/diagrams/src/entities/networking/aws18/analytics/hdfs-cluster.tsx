import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HDFS_CLUSTER = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#232F3E;fillColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.hdfs_cluster;',
  },
  _original_width: 60,
  _original_height: 60,
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
