import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ICE_FISHING = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.ice_fishing;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 60,
  _height: 60,
}

export function IceFishing(props: DiagramNodeProps) {
  return (
    <Shape
      {...ICE_FISHING}
      {...props}
      _style={extendStyle(ICE_FISHING, props)}
    />
  )
}
