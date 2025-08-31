import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SIMPLE_AD = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#DD344C;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.simple_ad;',
  },
  _width: 78,
  _height: 77,
}

export function SimpleAd(props: DiagramNodeProps) {
  return (
    <Shape {...SIMPLE_AD} {...props} _style={extendStyle(SIMPLE_AD, props)} />
  )
}
