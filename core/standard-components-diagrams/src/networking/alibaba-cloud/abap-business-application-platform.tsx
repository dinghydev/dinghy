import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ABAP_BUSINESS_APPLICATION_PLATFORM = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.abap_business_application_platform;',
  _width: 54.6,
  _height: 49.5,
}

export function AbapBusinessApplicationPlatform(props: DiagramNodeProps) {
  return <Shape {...ABAP_BUSINESS_APPLICATION_PLATFORM} {...props} />
}
