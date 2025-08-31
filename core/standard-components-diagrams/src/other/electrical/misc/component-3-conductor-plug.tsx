import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPONENT_3_CONDUCTOR_PLUG = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.3_conductor_plug',
  _width: 53,
  _height: 24,
}

export function Component3ConductorPlug(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPONENT_3_CONDUCTOR_PLUG}
      {...props}
      _style={extendStyle(COMPONENT_3_CONDUCTOR_PLUG, props)}
    />
  )
}
