import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DAMPER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.damper2;',
  },
  _original_width: 50,
  _original_height: 20,
}

export function Damper(props: DiagramNodeProps) {
  return <Shape {...DAMPER} {...props} _style={extendStyle(DAMPER, props)} />
}
