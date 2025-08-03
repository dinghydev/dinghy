import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WORKSPACE_SITE = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/workspace_site.svg;strokeColor=none;',
  _width: 50,
  _height: 48.5,
}

export function WorkspaceSite(props: DiagramNodeProps) {
  return <Shape {...WORKSPACE_SITE} {...props} />
}
