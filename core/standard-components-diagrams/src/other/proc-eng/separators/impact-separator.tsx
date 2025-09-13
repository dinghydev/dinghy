import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const IMPACT_SEPARATOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.separators.impact_separator;',
  },
  _width: 80,
  _height: 120,
}

export function ImpactSeparator(props: DiagramNodeProps) {
  return (
    <Shape
      {...IMPACT_SEPARATOR}
      {...props}
      _style={extendStyle(IMPACT_SEPARATOR, props)}
    />
  )
}
