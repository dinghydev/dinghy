import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DMS_DATA_MANAGEMENT_SERVICE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.dms_data_management_service;',
  _width: 45.9,
  _height: 47.400000000000006,
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
