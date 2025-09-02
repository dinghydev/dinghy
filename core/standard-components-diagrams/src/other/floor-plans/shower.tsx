import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SHOWER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.shower2;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Shower(props: DiagramNodeProps) {
  return <Shape {...SHOWER} {...props} _style={extendStyle(SHOWER, props)} />
}
