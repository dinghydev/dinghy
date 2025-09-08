import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SMS = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.sms;fillColor=#48B921;strokeColor=none',
  },
  _original_width: 69.2,
  _original_height: 64,
}

export function Sms(props: DiagramNodeProps) {
  return <Shape {...SMS} {...props} _style={extendStyle(SMS, props)} />
}
