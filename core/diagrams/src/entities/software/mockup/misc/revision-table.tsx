import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REVISION_TABLE = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.misc.rrect;rSize=0;strokeColor=#666666;',
  },
  _width: 0,
  _height: 75,
}

export function RevisionTable(props: NodeProps) {
  return (
    <Shape
      {...REVISION_TABLE}
      {...props}
      _style={extendStyle(REVISION_TABLE, props)}
    />
  )
}
