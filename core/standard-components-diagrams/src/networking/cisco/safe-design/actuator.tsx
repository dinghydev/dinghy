import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ACTUATOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#A153A0;verticalAlign=top;align=center;pointerEvents=1;shape=mxgraph.cisco_safe.design.actuator;',
  },
  _width: 50,
  _height: 45,
}

export function Actuator(props: DiagramNodeProps) {
  return (
    <Shape {...ACTUATOR} {...props} _style={extendStyle(ACTUATOR, props)} />
  )
}
