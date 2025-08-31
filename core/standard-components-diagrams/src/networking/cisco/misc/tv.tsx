import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TV = {
  _style:
    'shape=mxgraph.cisco.misc.tv;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 60,
  _height: 60,
}

export function Tv(props: DiagramNodeProps) {
  return <Shape {...TV} {...props} _style={extendStyle(TV, props)} />
}
