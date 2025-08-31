import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MUSEUM = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.museum;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 98,
  _height: 94,
}

export function Museum(props: DiagramNodeProps) {
  return <Shape {...MUSEUM} {...props} _style={extendStyle(MUSEUM, props)} />
}
