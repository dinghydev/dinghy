import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RADIATION = {
  _style: {
    entity:
      'shape=mxgraph.signs.safety.radiation;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 102,
  _original_height: 94,
}

export function Radiation(props: DiagramNodeProps) {
  return (
    <Shape {...RADIATION} {...props} _style={extendStyle(RADIATION, props)} />
  )
}
