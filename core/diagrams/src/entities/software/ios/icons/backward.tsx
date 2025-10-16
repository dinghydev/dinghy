import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BACKWARD = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.backward;',
  },
  _width: 30,
  _height: 16.8,
}

export function Backward(props: DiagramNodeProps) {
  return (
    <Shape {...BACKWARD} {...props} _style={extendStyle(BACKWARD, props)} />
  )
}
