import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VENT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.vent;',
  },
  _original_width: 80,
  _original_height: 140,
}

export function Vent(props: DiagramNodeProps) {
  return <Shape {...VENT} {...props} _style={extendStyle(VENT, props)} />
}
