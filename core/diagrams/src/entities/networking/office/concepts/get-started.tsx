import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GET_STARTED = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.get_started;',
  },
  _original_width: 42,
  _original_height: 52,
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
