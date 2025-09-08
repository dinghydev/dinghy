import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ARROW_SE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.arrowSE;fillColor=#000000;aspect=fixed;',
  },
  _original_width: 45.5,
  _original_height: 26,
}

export function ArrowSe(props: DiagramNodeProps) {
  return (
    <Shape {...ARROW_SE} {...props} _style={extendStyle(ARROW_SE, props)} />
  )
}
