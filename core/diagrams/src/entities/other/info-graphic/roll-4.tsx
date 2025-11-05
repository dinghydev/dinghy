import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROLL_4 = {
  _style: {
    entity:
      'ellipse;html=1;strokeWidth=4;fillColor=#BAC8D3;strokeColor=none;shadow=0;fontSize=10;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;spacing=10;',
  },
  _width: 3,
  _height: 400,
}

export function Roll4(props: NodeProps) {
  return <Shape {...ROLL_4} {...props} _style={extendStyle(ROLL_4, props)} />
}
