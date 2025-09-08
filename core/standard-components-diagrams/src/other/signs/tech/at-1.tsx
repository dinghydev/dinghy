import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AT_1 = {
  _style: {
    entity:
      'shape=mxgraph.signs.tech.at_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 99,
}

export function At1(props: DiagramNodeProps) {
  return <Shape {...AT_1} {...props} _style={extendStyle(AT_1, props)} />
}
