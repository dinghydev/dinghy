import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FUNNEL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.funnel;pointerEvents=1;',
  },
  _original_width: 40,
  _original_height: 80,
}

export function Funnel(props: DiagramNodeProps) {
  return <Shape {...FUNNEL} {...props} _style={extendStyle(FUNNEL, props)} />
}
