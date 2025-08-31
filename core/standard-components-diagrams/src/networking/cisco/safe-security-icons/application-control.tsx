import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APPLICATION_CONTROL = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.application_control;',
  _width: 60,
  _height: 60,
}

export function ApplicationControl(props: DiagramNodeProps) {
  return (
    <Shape
      {...APPLICATION_CONTROL}
      {...props}
      _style={extendStyle(APPLICATION_CONTROL, props)}
    />
  )
}
