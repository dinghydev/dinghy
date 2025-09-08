import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WHATSAPP = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.whatsapp;fillColor=#00E676;strokeColor=#dddddd',
  },
  _original_width: 74.4,
  _original_height: 74.8,
}

export function Whatsapp(props: DiagramNodeProps) {
  return (
    <Shape {...WHATSAPP} {...props} _style={extendStyle(WHATSAPP, props)} />
  )
}
