import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FLEXIBLE_HOSE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.flexible_hose;pointerEvents=1;',
  },
  _width: 50,
  _height: 25,
}

export function FlexibleHose(props: NodeProps) {
  return (
    <Shape
      {...FLEXIBLE_HOSE}
      {...props}
      _style={extendStyle(FLEXIBLE_HOSE, props)}
    />
  )
}
