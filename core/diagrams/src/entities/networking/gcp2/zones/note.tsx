import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NOTE = {
  _style: {
    entity:
      'strokeColor=none;shadow=0;gradientColor=none;fontSize=11;align=left;spacing=10;fontColor=#;9E9E9E;verticalAlign=top;spacingTop=100;whiteSpace=wrap;html=1;fillColor=#ffffff;',
  },
  _width: 300,
  _height: 350,
}

export function Note(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, NOTE)} />
}
