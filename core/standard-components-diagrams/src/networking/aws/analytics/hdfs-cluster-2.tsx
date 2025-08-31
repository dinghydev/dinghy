import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HDFS_CLUSTER_2 = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.hdfs_cluster;',
  },
  _width: 60,
  _height: 60,
}

export function HdfsCluster2(props: DiagramNodeProps) {
  return (
    <Shape
      {...HDFS_CLUSTER_2}
      {...props}
      _style={extendStyle(HDFS_CLUSTER_2, props)}
    />
  )
}
