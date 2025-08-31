import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WAN_ACCELERATOR = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.wan_accelerator;',
  },
  _width: 46,
  _height: 46,
}

export function WanAccelerator(props: DiagramNodeProps) {
  return (
    <Shape
      {...WAN_ACCELERATOR}
      {...props}
      _style={extendStyle(WAN_ACCELERATOR, props)}
    />
  )
}
