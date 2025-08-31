import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const UPS = {
  _style:
    'shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.ups;network2IconXOffset=-0.0006;network2IconYOffset=0.0003;network2IconW=0.62;network2IconH=1.0006;',
  _width: 31,
  _height: 50.029999999999994,
}

export function Ups(props: DiagramNodeProps) {
  return <Shape {...UPS} {...props} _style={extendStyle(UPS, props)} />
}
