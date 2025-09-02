import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SEA_PLANE = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.sea_plane;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 68,
}

export function SeaPlane(props: DiagramNodeProps) {
  return (
    <Shape {...SEA_PLANE} {...props} _style={extendStyle(SEA_PLANE, props)} />
  )
}
