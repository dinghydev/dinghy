import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const USB = {
  _style: {
    entity:
      'shape=mxgraph.signs.tech.usb;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 43,
  _original_height: 98,
}

export function Usb(props: DiagramNodeProps) {
  return <Shape {...USB} {...props} _style={extendStyle(USB, props)} />
}
