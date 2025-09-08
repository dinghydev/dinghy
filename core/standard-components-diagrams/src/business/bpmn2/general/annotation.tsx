import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ANNOTATION = {
  _style: {
    entity:
      'html=1;shape=mxgraph.flowchart.annotation_2;align=left;labelPosition=right;',
  },
  _original_width: 50,
  _original_height: 100,
}

export function Annotation(props: DiagramNodeProps) {
  return (
    <Shape {...ANNOTATION} {...props} _style={extendStyle(ANNOTATION, props)} />
  )
}
