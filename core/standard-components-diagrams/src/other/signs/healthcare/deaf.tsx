import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DEAF = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.deaf;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 79,
  _original_height: 98,
}

export function Deaf(props: DiagramNodeProps) {
  return <Shape {...DEAF} {...props} _style={extendStyle(DEAF, props)} />
}
