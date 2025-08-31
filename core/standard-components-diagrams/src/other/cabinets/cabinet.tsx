import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CABINET = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.cabinet;hasStand=1',
  },
  _width: 250,
  _height: 500,
}

export function Cabinet(props: DiagramNodeProps) {
  return <Shape {...CABINET} {...props} _style={extendStyle(CABINET, props)} />
}
