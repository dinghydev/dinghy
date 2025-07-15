import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SCROLLSPY = {
  _style:
    'fillColor=#F8F9FA;strokeColor=none;align=left;fontSize=14;spacing=10;',
  _width: 0,
  _height: 300,
}

export function Scrollspy(props: DiagramNodeProps) {
  return <Shape {...SCROLLSPY} {...props} />
}
