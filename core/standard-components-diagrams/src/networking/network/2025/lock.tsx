import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOCK = {
  _style:
    'shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.lock;network2IconW=0.8;network2IconH=0.9999;',
  _width: 40,
  _height: 49.995,
}

export function Lock(props: DiagramNodeProps) {
  return <Shape {...LOCK} {...props} />
}
