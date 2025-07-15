import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ANNOTATION_2 = {
  _style:
    'strokeWidth=2;html=1;shape=mxgraph.flowchart.annotation_2;align=left;labelPosition=right;pointerEvents=1;',
  _width: 50,
  _height: 100,
}

export function Annotation2(props: DiagramNodeProps) {
  return <Shape {...ANNOTATION_2} {...props} />
}
