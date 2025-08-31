import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WEB_HOSTING = {
  _style:
    'shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.web_hosting;network2IconW=1;network2IconH=0.9125;',
  _width: 50,
  _height: 45.625,
}

export function WebHosting(props: DiagramNodeProps) {
  return (
    <Shape
      {...WEB_HOSTING}
      {...props}
      _style={extendStyle(WEB_HOSTING, props)}
    />
  )
}
