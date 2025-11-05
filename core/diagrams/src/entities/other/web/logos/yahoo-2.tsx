import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const YAHOO_2 = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.yahoo_2;fillColor=#65106E;strokeColor=none',
  },
  _width: 80,
  _height: 46.6,
}

export function Yahoo2(props: NodeProps) {
  return <Shape {...YAHOO_2} {...props} _style={extendStyle(YAHOO_2, props)} />
}
