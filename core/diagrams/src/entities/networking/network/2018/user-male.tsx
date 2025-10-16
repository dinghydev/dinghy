import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const USER_MALE = {
  _style: {
    entity:
      'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.user_male;',
  },
  _width: 40,
  _height: 100,
}

export function UserMale(props: DiagramNodeProps) {
  return (
    <Shape {...USER_MALE} {...props} _style={extendStyle(USER_MALE, props)} />
  )
}
