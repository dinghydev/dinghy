import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TAG_LINK = {
  _style: {
    entity:
      'dashed=0;html=1;fillColor=#F0F2F5;strokeColor=none;align=center;rounded=1;arcSize=10;fontColor=#3384FF;fontStyle=1;fontSize=11;shadow=0',
  },
  _width: 60,
  _height: 20,
}

export function TagLink(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TAG_LINK)} />
}
