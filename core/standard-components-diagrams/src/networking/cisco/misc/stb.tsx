import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STB = {
  _style:
    'shape=mxgraph.cisco.misc.stb;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 86,
  _height: 37,
}

export function Stb(props: DiagramNodeProps) {
  return <Shape {...STB} {...props} _style={extendStyle(STB, props)} />
}
