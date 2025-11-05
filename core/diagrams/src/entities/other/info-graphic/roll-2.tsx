import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROLL_2 = {
  _style: {
    entity:
      'ellipse;html=1;strokeWidth=4;fillColor=#2F5B7C;strokeColor=none;shadow=0;fontSize=10;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;spacing=10;',
  },
  _width: 1,
  _height: 400,
}

export function Roll2(props: NodeProps) {
  return <Shape {...ROLL_2} {...props} _style={extendStyle(ROLL_2, props)} />
}
