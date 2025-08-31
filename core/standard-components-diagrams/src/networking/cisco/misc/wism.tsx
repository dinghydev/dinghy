import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WISM = {
  _style:
    'shape=mxgraph.cisco.misc.wism;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 80,
  _height: 96,
}

export function Wism(props: DiagramNodeProps) {
  return <Shape {...WISM} {...props} _style={extendStyle(WISM, props)} />
}
