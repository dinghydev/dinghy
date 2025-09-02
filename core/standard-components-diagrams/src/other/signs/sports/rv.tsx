import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RV = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.rv;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 62,
}

export function Rv(props: DiagramNodeProps) {
  return <Shape {...RV} {...props} _style={extendStyle(RV, props)} />
}
