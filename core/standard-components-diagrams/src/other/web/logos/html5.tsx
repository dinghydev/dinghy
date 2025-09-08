import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HTML5 = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.html5',
  },
  _original_width: 52.400000000000006,
  _original_height: 74,
}

export function Html5(props: DiagramNodeProps) {
  return <Shape {...HTML5} {...props} _style={extendStyle(HTML5, props)} />
}
