import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SWIRL_19 = {
  _style:
    'ellipse;whiteSpace=wrap;html=1;aspect=fixed;shadow=0;strokeColor=none;fillColor=#10739E;fontSize=17;fontColor=#FFFFFF;align=center;fontStyle=1;rounded=0;',
  _width: 12,
  _height: 215,
}

export function Swirl19(props: DiagramNodeProps) {
  return (
    <Shape {...SWIRL_19} {...props} _style={extendStyle(SWIRL_19, props)} />
  )
}
