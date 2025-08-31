import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SHOWER_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.people.shower_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 98,
  _height: 92,
}

export function Shower2(props: DiagramNodeProps) {
  return (
    <Shape {...SHOWER_2} {...props} _style={extendStyle(SHOWER_2, props)} />
  )
}
