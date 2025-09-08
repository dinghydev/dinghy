import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CO_AX = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.co-ax;',
  },
  _original_width: 40,
  _original_height: 60,
}

export function CoAx(props: DiagramNodeProps) {
  return <Shape {...CO_AX} {...props} _style={extendStyle(CO_AX, props)} />
}
