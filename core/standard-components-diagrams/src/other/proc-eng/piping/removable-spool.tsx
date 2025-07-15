import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const REMOVABLE_SPOOL = {
  _style:
    'verticalAlign=bottom;pointerEvents=1;dashed=0;shape=mxgraph.pid.piping.removable_spool;html=1;overflow=fill;',
  _width: 50,
  _height: 30,
}

export function RemovableSpool(props: DiagramNodeProps) {
  return <Shape {...REMOVABLE_SPOOL} {...props} />
}
