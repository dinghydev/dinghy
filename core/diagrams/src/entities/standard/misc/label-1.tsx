import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LABEL_1 = {
  _style: {
    entity: 'label;whiteSpace=wrap;html=1;image=img/clipart/Gear_128x128.png',
  },
  _width: 140,
  _height: 60,
}

export function Label1(props: NodeProps) {
  return <Shape {...LABEL_1} {...props} _style={extendStyle(LABEL_1, props)} />
}
