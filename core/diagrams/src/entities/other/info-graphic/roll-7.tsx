import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROLL_7 = {
  _style: {
    entity:
      'ellipse;html=1;strokeWidth=4;fillColor=#F5AB50;strokeColor=none;shadow=0;fontSize=20;fontColor=#FFFFFF;align=center;fontStyle=1;whiteSpace=wrap;spacing=10;',
  },
  _width: 6,
  _height: 400,
}

export function Roll7(props: NodeProps) {
  return <Shape {...ROLL_7} {...props} _style={extendStyle(ROLL_7, props)} />
}
