import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SMS = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.sms;fillColor=#86D466;gradientColor=#42B418',
  },
  _width: 102.4,
  _height: 102.4,
}

export function Sms(props: DiagramNodeProps) {
  return <Shape {...SMS} {...props} _style={extendStyle(SMS, props)} />
}
