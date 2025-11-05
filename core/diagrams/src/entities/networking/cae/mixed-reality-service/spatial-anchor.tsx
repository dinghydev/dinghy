import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SPATIAL_ANCHOR = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Spatial_Anchor.svg;strokeColor=none;',
  },
  _original_width: 48,
  _original_height: 50,
}

export function SpatialAnchor(props: NodeProps) {
  return (
    <Shape
      {...SPATIAL_ANCHOR}
      {...props}
      _style={extendStyle(SPATIAL_ANCHOR, props)}
    />
  )
}
