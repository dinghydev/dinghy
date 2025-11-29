import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PC_ROUTERCARD = {
  _style: {
    entity:
      'shape=mxgraph.cisco.computers_and_peripherals.pc_routercard;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 78,
  _original_height: 70,
}

export function PcRoutercard(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PC_ROUTERCARD)} />
}
