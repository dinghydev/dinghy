import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FORUMS = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.forums;fillColor=#F58534;gradientColor=none;',
  },
  _original_width: 85.5,
  _original_height: 82.5,
}

export function Forums(props: DiagramNodeProps) {
  return <Shape {...FORUMS} {...props} _style={extendStyle(FORUMS, props)} />
}
