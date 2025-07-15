import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ANNOTATION = {
  _style:
    'strokeWidth=2;html=1;shape=mxgraph.flowchart.annotation_1;align=left;pointerEvents=1;',
  _width: 50,
  _height: 100,
}

export function Annotation(props: DiagramNodeProps) {
  return <Shape {...ANNOTATION} {...props} />
}
