import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SCU_STORAGE_CAPACITY_UNIT = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.scu_storage_capacity_unit;',
  },
  _original_width: 51,
  _original_height: 54.900000000000006,
}

export function ScuStorageCapacityUnit(props: NodeProps) {
  return (
    <Shape
      {...SCU_STORAGE_CAPACITY_UNIT}
      {...props}
      _style={extendStyle(SCU_STORAGE_CAPACITY_UNIT, props)}
    />
  )
}
