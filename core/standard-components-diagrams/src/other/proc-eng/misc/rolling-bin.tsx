import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROLLING_BIN = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.rolling_bin;',
  },
  _original_width: 100,
  _original_height: 65,
}

export function RollingBin(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROLLING_BIN}
      {...props}
      _style={extendStyle(ROLLING_BIN, props)}
    />
  )
}
