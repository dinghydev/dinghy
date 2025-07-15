import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MONITOR = {
  _style:
    'shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.monitor;network2IconYOffset=-0.009;network2IconW=1;network2IconH=0.742;',
  _width: 50,
  _height: 37.1,
}

export function Monitor(props: DiagramNodeProps) {
  return <Shape {...MONITOR} {...props} />
}
