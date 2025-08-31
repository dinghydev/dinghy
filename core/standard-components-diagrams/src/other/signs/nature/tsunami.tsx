import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TSUNAMI = {
  _style:
    'shape=mxgraph.signs.nature.tsunami;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 88,
}

export function Tsunami(props: DiagramNodeProps) {
  return <Shape {...TSUNAMI} {...props} _style={extendStyle(TSUNAMI, props)} />
}
