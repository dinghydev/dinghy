import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PARTIALLY_SUBMERGED_WRECK = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.partially_submerged_wreck;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 98,
  _height: 76,
}

export function PartiallySubmergedWreck(props: DiagramNodeProps) {
  return (
    <Shape
      {...PARTIALLY_SUBMERGED_WRECK}
      {...props}
      _style={extendStyle(PARTIALLY_SUBMERGED_WRECK, props)}
    />
  )
}
