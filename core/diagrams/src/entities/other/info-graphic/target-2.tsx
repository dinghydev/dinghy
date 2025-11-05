import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TARGET_2 = {
  _style: {
    entity:
      'ellipse;html=1;strokeWidth=4;fillColor=#F8C382;strokeColor=#ffffff;shadow=0;fontSize=10;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;spacing=10;',
  },
  _width: 1,
  _height: 350,
}

export function Target2(props: NodeProps) {
  return (
    <Shape {...TARGET_2} {...props} _style={extendStyle(TARGET_2, props)} />
  )
}
