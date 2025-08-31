import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SHELTER = {
  _style:
    'shape=mxgraph.signs.sports.shelter;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 90,
}

export function Shelter(props: DiagramNodeProps) {
  return <Shape {...SHELTER} {...props} _style={extendStyle(SHELTER, props)} />
}
