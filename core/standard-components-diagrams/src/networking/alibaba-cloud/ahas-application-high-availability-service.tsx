import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AHAS_APPLICATION_HIGH_AVAILABILITY_SERVICE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.ahas_application_high_availability_service;',
  _width: 46.5,
  _height: 53.7,
}

export function AhasApplicationHighAvailabilityService(
  props: DiagramNodeProps,
) {
  return <Shape {...AHAS_APPLICATION_HIGH_AVAILABILITY_SERVICE} {...props} />
}
