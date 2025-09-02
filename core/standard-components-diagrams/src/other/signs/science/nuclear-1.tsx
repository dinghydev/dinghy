import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NUCLEAR_1 = {
  _style: {
    entity:
      'shape=mxgraph.signs.science.nuclear_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 88,
}

export function Nuclear1(props: DiagramNodeProps) {
  return (
    <Shape {...NUCLEAR_1} {...props} _style={extendStyle(NUCLEAR_1, props)} />
  )
}
