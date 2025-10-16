import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FORKLIFT = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.forklift;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 87,
}

export function Forklift(props: DiagramNodeProps) {
  return (
    <Shape {...FORKLIFT} {...props} _style={extendStyle(FORKLIFT, props)} />
  )
}
