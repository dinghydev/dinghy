import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RADIOBUTTON = {
  _style: {
    entity:
      'shape=ellipse;fillColor=#eeeeee;strokeColor=#999999;gradientColor=#cccccc;html=1;align=left;spacingLeft=4;fontSize=17;fontColor=#666666;labelPosition=right;shadow=0;',
  },
  _original_width: 15,
  _original_height: 15,
}

export function Radiobutton(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, RADIOBUTTON)} />
}
