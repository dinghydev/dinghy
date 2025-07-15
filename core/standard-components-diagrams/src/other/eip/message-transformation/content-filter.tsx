import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONTENT_FILTER = {
  _style:
    'html=1;strokeWidth=2;outlineConnect=0;dashed=0;align=center;fontSize=8;fillColor=#c0f5a9;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.eip.content_filter;',
  _width: 150,
  _height: 90,
}

export function ContentFilter(props: DiagramNodeProps) {
  return <Shape {...CONTENT_FILTER} {...props} />
}
