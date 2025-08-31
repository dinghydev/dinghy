import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SPATIAL_ANCHOR = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Spatial_Anchor.svg;strokeColor=none;',
  },
  _width: 48,
  _height: 50,
}

export function SpatialAnchor(props: DiagramNodeProps) {
  return (
    <Shape
      {...SPATIAL_ANCHOR}
      {...props}
      _style={extendStyle(SPATIAL_ANCHOR, props)}
    />
  )
}
