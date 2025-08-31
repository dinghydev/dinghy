import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ELLIPSE = {
  _style: {
    entity: 'ellipse;whiteSpace=wrap;html=1;',
  },
  _width: 120,
  _height: 80,
}

export function Ellipse(props: DiagramNodeProps) {
  return <Shape {...ELLIPSE} {...props} _style={extendStyle(ELLIPSE, props)} />
}
