import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUTTON_LINK_2 = {
  _style: {
    entity:
      'fillColor=none;strokeColor=none;html=1;fontColor=#0057D8;align=center;verticalAlign=middle;fontStyle=0;fontSize=12',
  },
  _width: 86,
  _height: 33,
}

export function ButtonLink2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BUTTON_LINK_2)} />
}
