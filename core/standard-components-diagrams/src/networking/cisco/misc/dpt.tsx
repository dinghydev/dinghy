import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DPT = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.dpt;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 98,
  _original_height: 48,
}

export function Dpt(props: DiagramNodeProps) {
  return <Shape {...DPT} {...props} _style={extendStyle(DPT, props)} />
}
