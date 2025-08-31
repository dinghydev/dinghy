import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MOBILE_HUB = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.mobile_hub;fillColor=#AD688A;gradientColor=#F58435;gradientDirection=west;pointerEvents=1',
  _width: 75,
  _height: 81,
}

export function MobileHub(props: DiagramNodeProps) {
  return (
    <Shape {...MOBILE_HUB} {...props} _style={extendStyle(MOBILE_HUB, props)} />
  )
}
