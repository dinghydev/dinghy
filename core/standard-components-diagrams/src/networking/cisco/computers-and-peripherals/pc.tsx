import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PC = {
  _style: {
    entity:
      'shape=mxgraph.cisco.computers_and_peripherals.pc;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 78,
  _original_height: 70,
}

export function Pc(props: DiagramNodeProps) {
  return <Shape {...PC} {...props} _style={extendStyle(PC, props)} />
}
