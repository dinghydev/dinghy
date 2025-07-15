import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SCU_STORAGE_CAPACITY_UNIT = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.scu_storage_capacity_unit;',
  _width: 51,
  _height: 54.900000000000006,
}

export function ScuStorageCapacityUnit(props: DiagramNodeProps) {
  return <Shape {...SCU_STORAGE_CAPACITY_UNIT} {...props} />
}
