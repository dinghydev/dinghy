import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const USB = {
  _style: {
    entity:
      'shape=mxgraph.signs.tech.usb;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 43,
  _height: 98,
}

export function Usb(props: NodeProps) {
  return <Shape {...USB} {...props} _style={extendStyle(USB, props)} />
}
