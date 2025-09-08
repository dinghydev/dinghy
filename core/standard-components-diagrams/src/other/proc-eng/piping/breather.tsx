import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BREATHER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.breather;',
  },
  _original_width: 50,
  _original_height: 30,
}

export function Breather(props: DiagramNodeProps) {
  return (
    <Shape {...BREATHER} {...props} _style={extendStyle(BREATHER, props)} />
  )
}
