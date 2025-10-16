import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NUCLEAR_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.science.nuclear_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 99,
}

export function Nuclear2(props: DiagramNodeProps) {
  return (
    <Shape {...NUCLEAR_2} {...props} _style={extendStyle(NUCLEAR_2, props)} />
  )
}
