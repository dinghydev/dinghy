import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STP = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.stp;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 58,
  _original_height: 59,
}

export function Stp(props: DiagramNodeProps) {
  return <Shape {...STP} {...props} _style={extendStyle(STP, props)} />
}
