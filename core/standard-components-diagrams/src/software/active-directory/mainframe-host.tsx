import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MAINFRAME_HOST = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/mainframe_host.svg;',
  _width: 36,
  _height: 50,
}

export function MainframeHost(props: DiagramNodeProps) {
  return <Shape {...MAINFRAME_HOST} {...props} />
}
