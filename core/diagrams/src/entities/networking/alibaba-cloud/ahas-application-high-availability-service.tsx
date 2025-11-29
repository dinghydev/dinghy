import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AHAS_APPLICATION_HIGH_AVAILABILITY_SERVICE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.ahas_application_high_availability_service;',
  },
  _original_width: 46.5,
  _original_height: 53.7,
}

export function AhasApplicationHighAvailabilityService(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, AHAS_APPLICATION_HIGH_AVAILABILITY_SERVICE)}
    />
  )
}
