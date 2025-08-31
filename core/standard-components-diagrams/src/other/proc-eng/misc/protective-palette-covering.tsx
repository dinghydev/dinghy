import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROTECTIVE_PALETTE_COVERING = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.protective_palette_covering;',
  },
  _width: 80,
  _height: 100,
}

export function ProtectivePaletteCovering(props: DiagramNodeProps) {
  return (
    <Shape
      {...PROTECTIVE_PALETTE_COVERING}
      {...props}
      _style={extendStyle(PROTECTIVE_PALETTE_COVERING, props)}
    />
  )
}
