import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMPONENT_2_CONDUCTOR_JACK = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.2_conductor_jack',
  },
  _original_width: 100,
  _original_height: 50,
}

export function Component2ConductorJack(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPONENT_2_CONDUCTOR_JACK}
      {...props}
      _style={extendStyle(COMPONENT_2_CONDUCTOR_JACK, props)}
    />
  )
}
