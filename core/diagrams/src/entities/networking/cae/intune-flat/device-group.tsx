import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEVICE_GROUP = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.device_group',
  },
  _original_width: 50,
  _original_height: 50,
}

export function DeviceGroup(props: NodeProps) {
  return (
    <Shape
      {...DEVICE_GROUP}
      {...props}
      _style={extendStyle(DEVICE_GROUP, props)}
    />
  )
}
