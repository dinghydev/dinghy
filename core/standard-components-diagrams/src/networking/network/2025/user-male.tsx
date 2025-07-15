import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const USER_MALE = {
  _style:
    'shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.user_male;network2IconW=0.8918;network2IconH=1.0003;',
  _width: 44.59,
  _height: 50.015,
}

export function UserMale(props: DiagramNodeProps) {
  return <Shape {...USER_MALE} {...props} />
}
