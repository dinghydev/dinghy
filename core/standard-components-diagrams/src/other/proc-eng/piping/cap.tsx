import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CAP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.cap;',
  },
  _original_width: 10,
  _original_height: 20,
}

export function Cap(props: DiagramNodeProps) {
  return <Shape {...CAP} {...props} _style={extendStyle(CAP, props)} />
}
