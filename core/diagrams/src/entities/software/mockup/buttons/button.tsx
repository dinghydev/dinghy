import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUTTON = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.buttons.button;strokeColor=#666666;fontColor=#ffffff;mainText=;buttonStyle=round;fontSize=17;fontStyle=1;fillColor=#008cff;whiteSpace=wrap;',
  },
  _width: 150,
  _height: 50,
}

export function Button(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BUTTON)} />
}
