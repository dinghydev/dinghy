import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const YAHOO = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.yahoo;fillColor=#65106E;strokeColor=none',
  },
  _original_width: 74.4,
  _original_height: 43.6,
}

export function Yahoo(props: DiagramNodeProps) {
  return <Shape {...YAHOO} {...props} _style={extendStyle(YAHOO, props)} />
}
