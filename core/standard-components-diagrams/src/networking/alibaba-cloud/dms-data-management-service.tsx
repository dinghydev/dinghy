import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DMS_DATA_MANAGEMENT_SERVICE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.dms_data_management_service;',
  },
  _original_width: 45.9,
  _original_height: 47.400000000000006,
}

export function DmsDataManagementService(props: DiagramNodeProps) {
  return (
    <Shape
      {...DMS_DATA_MANAGEMENT_SERVICE}
      {...props}
      _style={extendStyle(DMS_DATA_MANAGEMENT_SERVICE, props)}
    />
  )
}
