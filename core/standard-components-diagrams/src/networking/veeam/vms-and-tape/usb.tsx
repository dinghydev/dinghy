import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const USB = {
  _style: {
    entity:
      'pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.usb;',
  },
  _original_width: 52.8,
  _original_height: 18.4,
}

export function Usb(props: DiagramNodeProps) {
  return <Shape {...USB} {...props} _style={extendStyle(USB, props)} />
}
