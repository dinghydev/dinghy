import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ANNOTATION = {
  _style: {
    entity:
      'html=1;shape=mxgraph.flowchart.annotation_2;align=left;labelPosition=right;',
  },
  _width: 50,
  _height: 100,
}

export function Annotation(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ANNOTATION)} />
}
