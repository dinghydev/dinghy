import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FINANCE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/Finance.svg;',
  _width: 68,
  _height: 67.2,
}

export function Finance(props: DiagramNodeProps) {
  return <Shape {...FINANCE} {...props} />
}
