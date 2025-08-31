import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BINOCULARS = {
  _style:
    'shape=mxgraph.signs.sports.binoculars;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 60,
  _height: 60,
}

export function Binoculars(props: DiagramNodeProps) {
  return (
    <Shape {...BINOCULARS} {...props} _style={extendStyle(BINOCULARS, props)} />
  )
}
