import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PHONE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.phone;fillColor=#76F21E;gradientColor=#079704',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Phone(props: DiagramNodeProps) {
  return <Shape {...PHONE} {...props} _style={extendStyle(PHONE, props)} />
}
