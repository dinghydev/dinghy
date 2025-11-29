import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DSI_DATA_SECURITY_INSURANCE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.dsi_data_security_insurance;',
  },
  _original_width: 43.5,
  _original_height: 51.3,
}

export function DsiDataSecurityInsurance(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, DSI_DATA_SECURITY_INSURANCE)}
    />
  )
}
