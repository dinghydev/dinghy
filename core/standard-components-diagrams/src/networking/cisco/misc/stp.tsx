import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STP = {
  _style:
    'shape=mxgraph.cisco.misc.stp;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 58,
  _height: 59,
}

export function Stp(props: DiagramNodeProps) {
  return <Shape {...STP} {...props} _style={extendStyle(STP, props)} />
}
