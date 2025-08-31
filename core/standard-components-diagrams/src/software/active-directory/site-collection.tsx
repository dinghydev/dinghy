import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SITE_COLLECTION = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/site_collection.svg;strokeColor=none;',
  _width: 50,
  _height: 47,
}

export function SiteCollection(props: DiagramNodeProps) {
  return (
    <Shape
      {...SITE_COLLECTION}
      {...props}
      _style={extendStyle(SITE_COLLECTION, props)}
    />
  )
}
