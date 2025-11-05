import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WAN_ACCELERATOR = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.wan_accelerator;',
  },
  _original_width: 46,
  _original_height: 46,
}

export function WanAccelerator(props: NodeProps) {
  return (
    <Shape
      {...WAN_ACCELERATOR}
      {...props}
      _style={extendStyle(WAN_ACCELERATOR, props)}
    />
  )
}
