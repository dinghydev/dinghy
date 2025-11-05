import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ANNOTATION_2 = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.flowchart.annotation_2;align=left;labelPosition=right;pointerEvents=1;',
  },
  _width: 50,
  _height: 100,
}

export function Annotation2(props: NodeProps) {
  return (
    <Shape
      {...ANNOTATION_2}
      {...props}
      _style={extendStyle(ANNOTATION_2, props)}
    />
  )
}
