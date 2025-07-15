import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const APPLICATION = {
  _style:
    'shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.application;network2IconXOffset=0.0048;network2IconYOffset=-0.0000;network2IconW=0.5927;network2IconH=1.02;',
  _width: 29.635,
  _height: 51,
}

export function Application(props: DiagramNodeProps) {
  return <Shape {...APPLICATION} {...props} />
}
