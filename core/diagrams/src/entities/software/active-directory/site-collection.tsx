import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SITE_COLLECTION = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/site_collection.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 47,
}

export function SiteCollection(props: NodeProps) {
  return (
    <Shape
      {...SITE_COLLECTION}
      {...props}
      _style={extendStyle(SITE_COLLECTION, props)}
    />
  )
}
