import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FEMALE = {
  _style:
    'shape=mxgraph.signs.people.female;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 76,
  _height: 98,
}

export function Female(props: DiagramNodeProps) {
  return <Shape {...FEMALE} {...props} _style={extendStyle(FEMALE, props)} />
}
