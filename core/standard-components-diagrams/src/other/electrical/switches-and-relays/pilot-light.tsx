import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PILOT_LIGHT = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.pilot_light;',
  _width: 60,
  _height: 60,
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
