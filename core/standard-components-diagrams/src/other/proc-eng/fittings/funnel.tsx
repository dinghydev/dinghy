import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FUNNEL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.funnel;',
  },
  _original_width: 80,
  _original_height: 140,
}

export function Funnel(props: DiagramNodeProps) {
  return <Shape {...FUNNEL} {...props} _style={extendStyle(FUNNEL, props)} />
}
