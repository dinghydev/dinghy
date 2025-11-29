import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PROTECTIVE_PALETTE_COVERING = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.protective_palette_covering;',
  },
  _width: 80,
  _height: 100,
}

export function ProtectivePaletteCovering(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, PROTECTIVE_PALETTE_COVERING)}
    />
  )
}
