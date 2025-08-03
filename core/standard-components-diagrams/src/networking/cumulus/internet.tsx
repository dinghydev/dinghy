import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INTERNET = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;image=img/lib/cumulus/internet.svg;labelPosition=center;verticalLabelPosition=middle;verticalAlign=middle;fontSize=14;fontColor=#36424A;whiteSpace=wrap;strokeColor=none;',
  _width: 274,
  _height: 98,
}

export function Internet(props: DiagramNodeProps) {
  return <Shape {...INTERNET} {...props} />
}
