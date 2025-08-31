import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SCROLLSPY = {
  _style:
    'fillColor=#F8F9FA;strokeColor=none;align=left;fontSize=14;spacing=10;',
  _width: 0,
  _height: 300,
}

export function Scrollspy(props: DiagramNodeProps) {
  return (
    <Shape {...SCROLLSPY} {...props} _style={extendStyle(SCROLLSPY, props)} />
  )
}
