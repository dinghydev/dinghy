import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HIGHWAY = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.highway;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 68,
  _height: 98,
}

export function Highway(props: DiagramNodeProps) {
  return <Shape {...HIGHWAY} {...props} _style={extendStyle(HIGHWAY, props)} />
}
