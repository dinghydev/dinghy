import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STROLLER = {
  _style: {
    entity:
      'shape=mxgraph.signs.people.stroller;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 100,
  _original_height: 85,
}

export function Stroller(props: DiagramNodeProps) {
  return (
    <Shape {...STROLLER} {...props} _style={extendStyle(STROLLER, props)} />
  )
}
