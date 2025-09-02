import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PC_MAN = {
  _style: {
    entity:
      'shape=mxgraph.cisco.people.pc_man;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 104,
  _original_height: 149,
}

export function PcMan(props: DiagramNodeProps) {
  return <Shape {...PC_MAN} {...props} _style={extendStyle(PC_MAN, props)} />
}
