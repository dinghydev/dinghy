import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SHADOWED_ROUTER = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/shadowed_router.svg;',
  _width: 41,
  _height: 50,
}

export function ShadowedRouter(props: DiagramNodeProps) {
  return <Shape {...SHADOWED_ROUTER} {...props} />
}
