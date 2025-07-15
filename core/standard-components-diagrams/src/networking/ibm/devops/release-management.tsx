import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RELEASE_MANAGEMENT = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/devops/release_management.svg;',
  _width: 60,
  _height: 60,
}

export function ReleaseManagement(props: DiagramNodeProps) {
  return <Shape {...RELEASE_MANAGEMENT} {...props} />
}
