import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SEQUENCE_DIAGRAM = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.package;overflow=fill;labelX=95;align=left;spacingLeft=5;verticalAlign=top;spacingTop=-3;',
  },
  _width: 160,
  _height: 80,
}

export function SequenceDiagram(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SEQUENCE_DIAGRAM)} />
}
