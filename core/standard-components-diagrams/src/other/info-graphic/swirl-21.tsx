import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SWIRL_21 = {
  _style: {
    entity:
      'ellipse;whiteSpace=wrap;html=1;aspect=fixed;shadow=0;strokeColor=none;fillColor=#AE4132;fontSize=17;fontColor=#FFFFFF;align=center;fontStyle=1;rounded=0;',
  },
  _width: 14,
  _height: 215,
}

export function Swirl21(props: DiagramNodeProps) {
  return (
    <Shape {...SWIRL_21} {...props} _style={extendStyle(SWIRL_21, props)} />
  )
}
