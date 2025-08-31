import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GET_STARTED = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.get_started;',
  _width: 42,
  _height: 52,
}

export function GetStarted(props: DiagramNodeProps) {
  return (
    <Shape
      {...GET_STARTED}
      {...props}
      _style={extendStyle(GET_STARTED, props)}
    />
  )
}
