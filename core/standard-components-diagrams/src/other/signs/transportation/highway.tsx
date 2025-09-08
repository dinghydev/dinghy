import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HIGHWAY = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.highway;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 68,
  _original_height: 98,
}

export function Highway(props: DiagramNodeProps) {
  return <Shape {...HIGHWAY} {...props} _style={extendStyle(HIGHWAY, props)} />
}
