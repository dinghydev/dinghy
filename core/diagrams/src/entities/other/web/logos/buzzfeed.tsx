import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUZZFEED = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.buzzfeed;fillColor=#ED3223;strokeColor=none',
  },
  _original_width: 78,
  _original_height: 78,
}

export function Buzzfeed(props: DiagramNodeProps) {
  return (
    <Shape {...BUZZFEED} {...props} _style={extendStyle(BUZZFEED, props)} />
  )
}
