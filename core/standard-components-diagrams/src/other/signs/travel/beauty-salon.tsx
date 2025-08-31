import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BEAUTY_SALON = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.beauty_salon;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 96,
  _height: 100,
}

export function BeautySalon(props: DiagramNodeProps) {
  return (
    <Shape
      {...BEAUTY_SALON}
      {...props}
      _style={extendStyle(BEAUTY_SALON, props)}
    />
  )
}
