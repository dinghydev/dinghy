import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PETADATA_HYBRIDDB_FOR_MYSQL = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.petadata_hybriddb_for_mysql;',
  },
  _original_width: 56.699999999999996,
  _original_height: 56.1,
}

export function PetadataHybriddbForMysql(props: NodeProps) {
  return (
    <Shape
      {...PETADATA_HYBRIDDB_FOR_MYSQL}
      {...props}
      _style={extendStyle(PETADATA_HYBRIDDB_FOR_MYSQL, props)}
    />
  )
}
