import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const YAHOO = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.yahoo;fillColor=#AC37AE;gradientColor=#2E0E2D',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Yahoo(props: DiagramNodeProps) {
  return <Shape {...YAHOO} {...props} _style={extendStyle(YAHOO, props)} />
}
