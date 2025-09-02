import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CROSS_COUNTRY_SKIING_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.cross_country_skiing_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 92,
}

export function CrossCountrySkiing2(props: DiagramNodeProps) {
  return (
    <Shape
      {...CROSS_COUNTRY_SKIING_2}
      {...props}
      _style={extendStyle(CROSS_COUNTRY_SKIING_2, props)}
    />
  )
}
