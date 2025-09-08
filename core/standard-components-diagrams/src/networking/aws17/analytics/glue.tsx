import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GLUE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.glue;fillColor=#F58534;gradientColor=none;',
  },
  _original_width: 82.5,
  _original_height: 99,
}

export function Glue(props: DiagramNodeProps) {
  return <Shape {...GLUE} {...props} _style={extendStyle(GLUE, props)} />
}
