import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EXHAUST_HEAD = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.exhaust_head;',
  },
  _original_width: 50,
  _original_height: 40,
}

export function ExhaustHead(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXHAUST_HEAD}
      {...props}
      _style={extendStyle(EXHAUST_HEAD, props)}
    />
  )
}
