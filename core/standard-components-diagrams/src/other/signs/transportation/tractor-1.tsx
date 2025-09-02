import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRACTOR_1 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.tractor_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 76,
}

export function Tractor1(props: DiagramNodeProps) {
  return (
    <Shape {...TRACTOR_1} {...props} _style={extendStyle(TRACTOR_1, props)} />
  )
}
