import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PIN_3 = {
  _style: {
    entity:
      'verticalLabelPosition=top;shadow=0;dashed=0;align=center;html=1;verticalAlign=bottom;strokeWidth=1;shape=mxgraph.mockup.misc.pin;fillColor2=#ccccff;fillColor3=#0000ff;strokeColor=#000066;',
  },
  _width: 10,
  _height: 25,
}

export function Pin3(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PIN_3)} />
}
