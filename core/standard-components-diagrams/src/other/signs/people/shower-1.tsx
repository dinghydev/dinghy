import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SHOWER_1 = {
  _style: {
    entity:
      'shape=mxgraph.signs.people.shower_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 101,
  _original_height: 98,
}

export function Shower1(props: DiagramNodeProps) {
  return (
    <Shape {...SHOWER_1} {...props} _style={extendStyle(SHOWER_1, props)} />
  )
}
