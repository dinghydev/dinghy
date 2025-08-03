import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INTERNET_GLOBE = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/internet_globe.svg;strokeColor=none;',
  _width: 50,
  _height: 50,
}

export function InternetGlobe(props: DiagramNodeProps) {
  return <Shape {...INTERNET_GLOBE} {...props} />
}
