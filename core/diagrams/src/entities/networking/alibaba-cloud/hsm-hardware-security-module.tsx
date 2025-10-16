import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HSM_HARDWARE_SECURITY_MODULE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.hsm_hardware_security_module;',
  },
  _original_width: 46.5,
  _original_height: 49.5,
}

export function HsmHardwareSecurityModule(props: DiagramNodeProps) {
  return (
    <Shape
      {...HSM_HARDWARE_SECURITY_MODULE}
      {...props}
      _style={extendStyle(HSM_HARDWARE_SECURITY_MODULE, props)}
    />
  )
}
