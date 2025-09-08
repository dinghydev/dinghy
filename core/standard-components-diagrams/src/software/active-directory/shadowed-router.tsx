import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SHADOWED_ROUTER = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/shadowed_router.svg;strokeColor=none;',
  },
  _original_width: 41,
  _original_height: 50,
}

export function ShadowedRouter(props: DiagramNodeProps) {
  return (
    <Shape
      {...SHADOWED_ROUTER}
      {...props}
      _style={extendStyle(SHADOWED_ROUTER, props)}
    />
  )
}
