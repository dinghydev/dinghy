import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HSM_HARDWARE_SECURITY_MODULE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.hsm_hardware_security_module;',
  _width: 46.5,
  _height: 49.5,
}

export function HsmHardwareSecurityModule(props: DiagramNodeProps) {
  return <Shape {...HSM_HARDWARE_SECURITY_MODULE} {...props} />
}
