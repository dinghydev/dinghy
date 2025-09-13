import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ARCHERY = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.archery;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 72,
  _height: 98,
}

export function Archery(props: DiagramNodeProps) {
  return <Shape {...ARCHERY} {...props} _style={extendStyle(ARCHERY, props)} />
}
