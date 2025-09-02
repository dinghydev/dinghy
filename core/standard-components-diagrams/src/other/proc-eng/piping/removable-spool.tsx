import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const REMOVABLE_SPOOL = {
  _style: {
    entity:
      'verticalAlign=bottom;pointerEvents=1;dashed=0;shape=mxgraph.pid.piping.removable_spool;html=1;overflow=fill;',
  },
  _original_width: 50,
  _original_height: 30,
}

export function RemovableSpool(props: DiagramNodeProps) {
  return (
    <Shape
      {...REMOVABLE_SPOOL}
      {...props}
      _style={extendStyle(REMOVABLE_SPOOL, props)}
    />
  )
}
