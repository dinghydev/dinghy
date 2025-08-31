import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CUSTOMS = {
  _style:
    'shape=mxgraph.signs.travel.customs;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 84,
}

export function Customs(props: DiagramNodeProps) {
  return <Shape {...CUSTOMS} {...props} _style={extendStyle(CUSTOMS, props)} />
}
