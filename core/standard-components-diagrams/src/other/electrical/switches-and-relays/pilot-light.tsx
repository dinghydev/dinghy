import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PILOT_LIGHT = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.pilot_light;',
  _width: 100,
  _height: 100,
}

export function PilotLight(props: DiagramNodeProps) {
  return <Shape {...PILOT_LIGHT} {...props} />
}
