import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WAN_ACCELERATOR = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.wan_accelerator;',
  },
  _original_width: 21,
  _original_height: 21,
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
