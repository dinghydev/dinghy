import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DIALOG = {
  _style: {
    entity:
      'shape=rect;rounded=1;strokeColor=none;fillColor=#F6F6F8;gradientColor=none;shadow=0;glass=0;dashed=1;fontFamily=Helvetica;fontSize=8;fontColor=#333333;align=center;html=1;verticalAlign=top;whiteSpace=wrap;spacing=2;spacingTop=0;',
  },
  _width: 120,
  _height: 70,
}

export function Dialog(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DIALOG)} />
}
