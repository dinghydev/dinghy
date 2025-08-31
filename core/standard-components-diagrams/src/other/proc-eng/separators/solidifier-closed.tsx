import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SOLIDIFIER_CLOSED = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.separators.solidifier_(closed);',
  },
  _width: 80,
  _height: 120,
}

export function SolidifierClosed(props: DiagramNodeProps) {
  return (
    <Shape
      {...SOLIDIFIER_CLOSED}
      {...props}
      _style={extendStyle(SOLIDIFIER_CLOSED, props)}
    />
  )
}
