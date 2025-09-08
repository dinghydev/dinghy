import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SOLIDIFIER_CLOSED = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.separators.solidifier_(closed);',
  },
  _original_width: 80,
  _original_height: 120,
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
