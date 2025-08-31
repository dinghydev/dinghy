import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RDS_MULTI_AZ_DB_CLUSTER = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#C925D1;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.rds_multi_az_db_cluster;',
  },
  _width: 60,
  _height: 60,
}

export function RdsMultiAzDbCluster(props: DiagramNodeProps) {
  return (
    <Shape
      {...RDS_MULTI_AZ_DB_CLUSTER}
      {...props}
      _style={extendStyle(RDS_MULTI_AZ_DB_CLUSTER, props)}
    />
  )
}
