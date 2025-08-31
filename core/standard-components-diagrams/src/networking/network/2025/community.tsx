import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMMUNITY = {
  _style:
    'shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.community;network2IconXOffset=-0.0036;network2IconYOffset=0.00087;network2IconW=0.876;network2IconH=1.0029;',
  _width: 43.8,
  _height: 50.144999999999996,
}

export function Community(props: DiagramNodeProps) {
  return (
    <Shape {...COMMUNITY} {...props} _style={extendStyle(COMMUNITY, props)} />
  )
}
