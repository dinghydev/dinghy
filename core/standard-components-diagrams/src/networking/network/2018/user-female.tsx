import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const USER_FEMALE = {
  _style: {
    entity:
      'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.user_female;',
  },
  _original_width: 40,
  _original_height: 100,
}

export function UserFemale(props: DiagramNodeProps) {
  return (
    <Shape
      {...USER_FEMALE}
      {...props}
      _style={extendStyle(USER_FEMALE, props)}
    />
  )
}
