import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SWIMMING_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.swimming_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 45,
}

export function Swimming2(props: DiagramNodeProps) {
  return (
    <Shape {...SWIMMING_2} {...props} _style={extendStyle(SWIMMING_2, props)} />
  )
}
