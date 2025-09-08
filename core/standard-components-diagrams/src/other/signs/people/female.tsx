import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FEMALE = {
  _style: {
    entity:
      'shape=mxgraph.signs.people.female;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 76,
  _original_height: 98,
}

export function Female(props: DiagramNodeProps) {
  return <Shape {...FEMALE} {...props} _style={extendStyle(FEMALE, props)} />
}
