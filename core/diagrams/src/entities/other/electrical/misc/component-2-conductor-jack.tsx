import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPONENT_2_CONDUCTOR_JACK = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.2_conductor_jack',
  },
  _width: 100,
  _height: 50,
}

export function Component2ConductorJack(props: NodeProps) {
  return (
    <Shape
      {...COMPONENT_2_CONDUCTOR_JACK}
      {...props}
      _style={extendStyle(COMPONENT_2_CONDUCTOR_JACK, props)}
    />
  )
}
