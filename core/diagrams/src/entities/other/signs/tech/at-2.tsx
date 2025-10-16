import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AT_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.tech.at_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 95,
}

export function At2(props: DiagramNodeProps) {
  return <Shape {...AT_2} {...props} _style={extendStyle(AT_2, props)} />
}
