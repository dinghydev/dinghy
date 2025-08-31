import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ITP = {
  _style:
    'shape=mxgraph.cisco.misc.itp;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 78,
  _height: 53,
}

export function Itp(props: DiagramNodeProps) {
  return <Shape {...ITP} {...props} _style={extendStyle(ITP, props)} />
}
