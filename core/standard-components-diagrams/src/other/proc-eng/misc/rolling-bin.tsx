import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROLLING_BIN = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.rolling_bin;',
  _width: 100,
  _height: 65,
}

export function RollingBin(props: DiagramNodeProps) {
  return <Shape {...ROLLING_BIN} {...props} />
}
