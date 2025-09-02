import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GOOGLE_PHOTOS = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.google_photos',
  },
  _original_width: 87.2,
  _original_height: 87.2,
}

export function GooglePhotos(props: DiagramNodeProps) {
  return (
    <Shape
      {...GOOGLE_PHOTOS}
      {...props}
      _style={extendStyle(GOOGLE_PHOTOS, props)}
    />
  )
}
