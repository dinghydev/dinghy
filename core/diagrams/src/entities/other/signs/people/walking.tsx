import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WALKING = {
  _style: {
    entity:
      'shape=mxgraph.signs.people.walking;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 55,
  _height: 99,
}

export function Walking(props: DiagramNodeProps) {
  return <Shape {...WALKING} {...props} _style={extendStyle(WALKING, props)} />
}
