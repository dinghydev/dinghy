import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TARGET_4 = {
  _style: {
    entity:
      'ellipse;html=1;strokeWidth=4;fillColor=#BAC8D3;strokeColor=#ffffff;shadow=0;fontSize=10;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;spacing=10;',
  },
  _width: 3,
  _height: 350,
}

export function Target4(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TARGET_4)} />
}
