import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PIN_5 = {
  _style: {
    entity:
      'verticalLabelPosition=top;shadow=0;dashed=0;align=center;html=1;verticalAlign=bottom;strokeWidth=1;shape=mxgraph.mockup.misc.pin;fillColor2=#ffa500;fillColor3=#885000;strokeColor=#997000;',
  },
  _width: 10,
  _height: 25,
}

export function Pin5(props: NodeProps) {
  return <Shape {...PIN_5} {...props} _style={extendStyle(PIN_5, props)} />
}
