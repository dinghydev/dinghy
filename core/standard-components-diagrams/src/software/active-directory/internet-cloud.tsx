import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INTERNET_CLOUD = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/internet_cloud.svg;',
  _width: 50,
  _height: 31.5,
}

export function InternetCloud(props: DiagramNodeProps) {
  return <Shape {...INTERNET_CLOUD} {...props} />
}
