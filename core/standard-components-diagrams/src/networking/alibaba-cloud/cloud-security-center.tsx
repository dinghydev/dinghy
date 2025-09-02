import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_SECURITY_CENTER = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.cloud_security_center;',
  },
  _original_width: 43.199999999999996,
  _original_height: 48.9,
}

export function CloudSecurityCenter(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_SECURITY_CENTER}
      {...props}
      _style={extendStyle(CLOUD_SECURITY_CENTER, props)}
    />
  )
}
