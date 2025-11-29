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
  return <Shape {...props} _style={extendStyle(props, ANNOTATION_2)} />
}
