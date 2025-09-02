import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SDDP_SENSITIVE_DATA_PROTECTION = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.sddp_sensitive_data_protection;',
  },
  _original_width: 48.9,
  _original_height: 57.9,
}

export function SddpSensitiveDataProtection(props: DiagramNodeProps) {
  return (
    <Shape
      {...SDDP_SENSITIVE_DATA_PROTECTION}
      {...props}
      _style={extendStyle(SDDP_SENSITIVE_DATA_PROTECTION, props)}
    />
  )
}
