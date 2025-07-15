import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WINDOWS_DOMAIN = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/windows_domain.svg;',
  _width: 50,
  _height: 42.5,
}

export function WindowsDomain(props: DiagramNodeProps) {
  return <Shape {...WINDOWS_DOMAIN} {...props} />
}
