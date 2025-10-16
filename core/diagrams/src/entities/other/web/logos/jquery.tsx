import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const JQUERY = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.jquery;fillColor=#0BB9EA;gradientColor=#032F80',
  },
  _original_width: 73.8,
  _original_height: 67,
}

export function Jquery(props: DiagramNodeProps) {
  return <Shape {...JQUERY} {...props} _style={extendStyle(JQUERY, props)} />
}
