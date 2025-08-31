import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SLOTH = {
  _style:
    'shape=mxgraph.signs.animals.sloth;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 81,
}

export function Sloth(props: DiagramNodeProps) {
  return <Shape {...SLOTH} {...props} _style={extendStyle(SLOTH, props)} />
}
