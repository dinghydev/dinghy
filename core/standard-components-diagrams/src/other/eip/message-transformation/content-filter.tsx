import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTENT_FILTER = {
  _style: {
    entity:
      'html=1;strokeWidth=2;outlineConnect=0;dashed=0;align=center;fontSize=8;fillColor=#c0f5a9;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.eip.content_filter;',
  },
  _original_width: 150,
  _original_height: 90,
}

export function ContentFilter(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTENT_FILTER}
      {...props}
      _style={extendStyle(CONTENT_FILTER, props)}
    />
  )
}
