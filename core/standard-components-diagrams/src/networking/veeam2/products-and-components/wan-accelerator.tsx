import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WAN_ACCELERATOR = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.wan_accelerator;',
  _width: 21,
  _height: 21,
}

export function WanAccelerator(props: DiagramNodeProps) {
  return <Shape {...WAN_ACCELERATOR} {...props} />
}
