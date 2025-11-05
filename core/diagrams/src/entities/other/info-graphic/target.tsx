import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TARGET = {
  _style: {
    entity:
      'ellipse;html=1;strokeWidth=4;fillColor=#F2931E;strokeColor=#ffffff;shadow=0;fontSize=10;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;spacing=10;',
  },
  _width: 0,
  _height: 350,
}

export function Target(props: NodeProps) {
  return <Shape {...TARGET} {...props} _style={extendStyle(TARGET, props)} />
}
