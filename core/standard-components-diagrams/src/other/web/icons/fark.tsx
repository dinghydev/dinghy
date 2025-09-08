import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FARK = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.fark;fillColor=#EBEBF1;gradientColor=#8482A7',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Fark(props: DiagramNodeProps) {
  return <Shape {...FARK} {...props} _style={extendStyle(FARK, props)} />
}
