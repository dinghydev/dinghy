import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INTERNET = {
  _style: {
    entity:
      'shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.internet;network2IconXOffset=0.0012;network2IconYOffset=0.0035;network2IconW=0.9677;network2IconH=0.7722;',
  },
  _width: 48.385,
  _height: 38.61,
}

export function Internet(props: DiagramNodeProps) {
  return (
    <Shape {...INTERNET} {...props} _style={extendStyle(INTERNET, props)} />
  )
}
