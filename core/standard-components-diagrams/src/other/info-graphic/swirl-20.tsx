import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SWIRL_20 = {
  _style:
    'ellipse;whiteSpace=wrap;html=1;aspect=fixed;shadow=0;strokeColor=none;fillColor=#F2931E;fontSize=17;fontColor=#FFFFFF;align=center;fontStyle=1;rounded=0;',
  _width: 13,
  _height: 215,
}

export function Swirl20(props: DiagramNodeProps) {
  return (
    <Shape {...SWIRL_20} {...props} _style={extendStyle(SWIRL_20, props)} />
  )
}
