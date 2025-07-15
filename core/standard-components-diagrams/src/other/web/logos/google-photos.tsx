import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GOOGLE_PHOTOS = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.google_photos',
  _width: 87.2,
  _height: 87.2,
}

export function GooglePhotos(props: DiagramNodeProps) {
  return <Shape {...GOOGLE_PHOTOS} {...props} />
}
