import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SPACER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.spacer;',
  },
  _original_width: 20,
  _original_height: 60,
}

export function Spacer(props: DiagramNodeProps) {
  return <Shape {...SPACER} {...props} _style={extendStyle(SPACER, props)} />
}
