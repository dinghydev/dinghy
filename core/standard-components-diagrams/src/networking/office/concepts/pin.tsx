import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PIN = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.pin;',
  },
  _original_width: 24,
  _original_height: 44,
}

export function Pin(props: DiagramNodeProps) {
  return <Shape {...PIN} {...props} _style={extendStyle(PIN, props)} />
}
