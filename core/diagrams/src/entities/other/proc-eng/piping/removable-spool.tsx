import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REMOVABLE_SPOOL = {
  _style: {
    entity:
      'verticalAlign=bottom;pointerEvents=1;dashed=0;shape=mxgraph.pid.piping.removable_spool;html=1;overflow=fill;',
  },
  _width: 50,
  _height: 30,
}

export function RemovableSpool(props: NodeProps) {
  return (
    <Shape
      {...REMOVABLE_SPOOL}
      {...props}
      _style={extendStyle(REMOVABLE_SPOOL, props)}
    />
  )
}
