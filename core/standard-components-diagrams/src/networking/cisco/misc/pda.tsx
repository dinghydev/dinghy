import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PDA = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.pda;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 72,
  _original_height: 101,
}

export function Pda(props: DiagramNodeProps) {
  return <Shape {...PDA} {...props} _style={extendStyle(PDA, props)} />
}
