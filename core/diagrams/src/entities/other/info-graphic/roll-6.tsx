import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROLL_6 = {
  _style: {
    entity:
      'ellipse;html=1;strokeWidth=4;fillColor=#F8C382;strokeColor=none;shadow=0;fontSize=10;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;spacing=10;',
  },
  _width: 5,
  _height: 400,
}

export function Roll6(props: NodeProps) {
  return <Shape {...ROLL_6} {...props} _style={extendStyle(ROLL_6, props)} />
}
