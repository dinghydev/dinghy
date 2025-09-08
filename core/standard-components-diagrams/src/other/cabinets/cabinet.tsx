import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CABINET = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.cabinet;hasStand=1',
  },
  _original_width: 250,
  _original_height: 500,
}

export function Cabinet(props: DiagramNodeProps) {
  return <Shape {...CABINET} {...props} _style={extendStyle(CABINET, props)} />
}
