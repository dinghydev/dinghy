import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VIEWING_GLASS_LIGHTING = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.viewing_glass_(lighting);',
  },
  _original_width: 100,
  _original_height: 100,
}

export function ViewingGlassLighting(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, VIEWING_GLASS_LIGHTING)} />
  )
}
