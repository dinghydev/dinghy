import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CUBE = {
  _style:
    'shape=mxgraph.cisco.misc.cube;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 104,
  _height: 53,
}

export function Cube(props: DiagramNodeProps) {
  return <Shape {...CUBE} {...props} _style={extendStyle(CUBE, props)} />
}
