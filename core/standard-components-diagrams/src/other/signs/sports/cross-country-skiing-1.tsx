import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CROSS_COUNTRY_SKIING_1 = {
  _style:
    'shape=mxgraph.signs.sports.cross_country_skiing_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 94,
}

export function CrossCountrySkiing1(props: DiagramNodeProps) {
  return <Shape {...CROSS_COUNTRY_SKIING_1} {...props} />
}
