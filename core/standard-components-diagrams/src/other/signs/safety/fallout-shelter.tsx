import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FALLOUT_SHELTER = {
  _style:
    'shape=mxgraph.signs.safety.fallout_shelter;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 60,
  _height: 60,
}

export function FalloutShelter(props: DiagramNodeProps) {
  return (
    <Shape
      {...FALLOUT_SHELTER}
      {...props}
      _style={extendStyle(FALLOUT_SHELTER, props)}
    />
  )
}
