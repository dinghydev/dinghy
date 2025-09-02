import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DIN_RAIL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.din_rail;',
  },
  _original_width: 500,
  _original_height: 25,
}

export function DinRail(props: DiagramNodeProps) {
  return (
    <Shape {...DIN_RAIL} {...props} _style={extendStyle(DIN_RAIL, props)} />
  )
}
