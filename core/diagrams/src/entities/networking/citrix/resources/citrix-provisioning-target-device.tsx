import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CITRIX_PROVISIONING_TARGET_DEVICE = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.citrix_provisioning_target_device;',
  },
  _original_width: 41.815000000000005,
  _original_height: 50,
}

export function CitrixProvisioningTargetDevice(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, CITRIX_PROVISIONING_TARGET_DEVICE)}
    />
  )
}
