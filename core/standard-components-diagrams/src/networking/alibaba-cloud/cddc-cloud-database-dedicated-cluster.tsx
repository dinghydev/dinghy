import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CDDC_CLOUD_DATABASE_DEDICATED_CLUSTER = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.cddc_cloud_database_dedicated_cluster;',
  },
  _original_width: 50.4,
  _original_height: 45.6,
}

export function CddcCloudDatabaseDedicatedCluster(props: DiagramNodeProps) {
  return (
    <Shape
      {...CDDC_CLOUD_DATABASE_DEDICATED_CLUSTER}
      {...props}
      _style={extendStyle(CDDC_CLOUD_DATABASE_DEDICATED_CLUSTER, props)}
    />
  )
}
