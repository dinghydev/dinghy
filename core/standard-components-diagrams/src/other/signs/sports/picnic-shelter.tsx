import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PICNIC_SHELTER = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.picnic_shelter;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 94,
}

export function PicnicShelter(props: DiagramNodeProps) {
  return (
    <Shape
      {...PICNIC_SHELTER}
      {...props}
      _style={extendStyle(PICNIC_SHELTER, props)}
    />
  )
}
