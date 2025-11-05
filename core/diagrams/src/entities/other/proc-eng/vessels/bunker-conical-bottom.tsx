import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUNKER_CONICAL_BOTTOM = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.bunker_(conical_bottom);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function BunkerConicalBottom(props: NodeProps) {
  return (
    <Shape
      {...BUNKER_CONICAL_BOTTOM}
      {...props}
      _style={extendStyle(BUNKER_CONICAL_BOTTOM, props)}
    />
  )
}
