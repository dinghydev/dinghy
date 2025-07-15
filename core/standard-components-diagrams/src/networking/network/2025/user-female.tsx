import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const USER_FEMALE = {
  _style:
    'shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.user_female;network2IconXOffset=-0.0011;network2IconYOffset=-0.003;network2IconW=0.8096;network2IconH=0.994;',
  _width: 40.48,
  _height: 49.7,
}

export function UserFemale(props: DiagramNodeProps) {
  return <Shape {...USER_FEMALE} {...props} />
}
