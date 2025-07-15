import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HDFS_CLUSTER = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.hdfs_cluster;fillColor=#F58534;gradientColor=none;',
  _width: 61.5,
  _height: 63,
}

export function HdfsCluster(props: DiagramNodeProps) {
  return <Shape {...HDFS_CLUSTER} {...props} />
}
