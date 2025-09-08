import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ANNOTATION = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.flowchart.annotation_1;align=left;pointerEvents=1;',
  },
  _original_width: 50,
  _original_height: 100,
}

export function Annotation(props: DiagramNodeProps) {
  return (
    <Shape {...ANNOTATION} {...props} _style={extendStyle(ANNOTATION, props)} />
  )
}
