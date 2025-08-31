import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PICNIC_SHELTER = {
  _style:
    'shape=mxgraph.signs.sports.picnic_shelter;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 94,
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
