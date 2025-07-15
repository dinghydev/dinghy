import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FIJI = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Fiji.svg;',
  _width: 54,
  _height: 68,
}

export function Fiji(props: DiagramNodeProps) {
  return <Shape {...FIJI} {...props} />
}
