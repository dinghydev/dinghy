import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STRAINER_CONE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.strainer_(cone);',
  },
  _width: 40,
  _height: 80,
}

export function StrainerCone(props: DiagramNodeProps) {
  return (
    <Shape
      {...STRAINER_CONE}
      {...props}
      _style={extendStyle(STRAINER_CONE, props)}
    />
  )
}
