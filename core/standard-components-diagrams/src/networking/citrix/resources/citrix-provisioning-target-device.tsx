import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CITRIX_PROVISIONING_TARGET_DEVICE = {
  _style:
    'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.citrix_provisioning_target_device;',
  _width: 41.815000000000005,
  _height: 50,
}

export function CitrixProvisioningTargetDevice(props: DiagramNodeProps) {
  return <Shape {...CITRIX_PROVISIONING_TARGET_DEVICE} {...props} />
}
