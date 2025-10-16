import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ABAP_BUSINESS_APPLICATION_PLATFORM = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.abap_business_application_platform;',
  },
  _original_width: 54.6,
  _original_height: 49.5,
}

export function AbapBusinessApplicationPlatform(props: DiagramNodeProps) {
  return (
    <Shape
      {...ABAP_BUSINESS_APPLICATION_PLATFORM}
      {...props}
      _style={extendStyle(ABAP_BUSINESS_APPLICATION_PLATFORM, props)}
    />
  )
}
