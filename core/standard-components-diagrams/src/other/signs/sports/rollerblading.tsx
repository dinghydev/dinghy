import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROLLERBLADING = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.rollerblading;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 94,
  _original_height: 99,
}

export function Rollerblading(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROLLERBLADING}
      {...props}
      _style={extendStyle(ROLLERBLADING, props)}
    />
  )
}
