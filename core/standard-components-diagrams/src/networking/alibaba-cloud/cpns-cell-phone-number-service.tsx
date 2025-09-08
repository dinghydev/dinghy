import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CPNS_CELL_PHONE_NUMBER_SERVICE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.cpns_cell_phone_number_service;',
  },
  _original_width: 39.900000000000006,
  _original_height: 54.900000000000006,
}

export function CpnsCellPhoneNumberService(props: DiagramNodeProps) {
  return (
    <Shape
      {...CPNS_CELL_PHONE_NUMBER_SERVICE}
      {...props}
      _style={extendStyle(CPNS_CELL_PHONE_NUMBER_SERVICE, props)}
    />
  )
}
