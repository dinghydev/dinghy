import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ANNOTATION = {
  _style:
    'html=1;shape=mxgraph.flowchart.annotation_2;align=left;labelPosition=right;',
  _width: 50,
  _height: 100,
}

export function Annotation(props: DiagramNodeProps) {
  return (
    <Shape {...ANNOTATION} {...props} _style={extendStyle(ANNOTATION, props)} />
  )
}
