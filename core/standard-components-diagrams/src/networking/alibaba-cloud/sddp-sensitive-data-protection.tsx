import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SDDP_SENSITIVE_DATA_PROTECTION = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.sddp_sensitive_data_protection;',
  _width: 48.9,
  _height: 57.9,
}

export function SddpSensitiveDataProtection(props: DiagramNodeProps) {
  return <Shape {...SDDP_SENSITIVE_DATA_PROTECTION} {...props} />
}
