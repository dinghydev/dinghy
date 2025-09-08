import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PILOT_LIGHT = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.pilot_light;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function PilotLight(props: DiagramNodeProps) {
  return (
    <Shape
      {...PILOT_LIGHT}
      {...props}
      _style={extendStyle(PILOT_LIGHT, props)}
    />
  )
}
