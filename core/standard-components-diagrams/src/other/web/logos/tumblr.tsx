import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TUMBLR = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.tumblr;fillColor=#36465D;strokeColor=none',
  },
  _original_width: 40.6,
  _original_height: 65.2,
}

export function Tumblr(props: DiagramNodeProps) {
  return <Shape {...TUMBLR} {...props} _style={extendStyle(TUMBLR, props)} />
}
