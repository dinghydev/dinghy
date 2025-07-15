import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LAYOUT = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/Layout.svg;',
  _width: 60.760000000000005,
  _height: 68,
}

export function Layout(props: DiagramNodeProps) {
  return <Shape {...LAYOUT} {...props} />
}
