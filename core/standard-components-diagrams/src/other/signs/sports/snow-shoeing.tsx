import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SNOW_SHOEING = {
  _style:
    'shape=mxgraph.signs.sports.snow_shoeing;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 84,
  _height: 99,
}

export function SnowShoeing(props: DiagramNodeProps) {
  return (
    <Shape
      {...SNOW_SHOEING}
      {...props}
      _style={extendStyle(SNOW_SHOEING, props)}
    />
  )
}
