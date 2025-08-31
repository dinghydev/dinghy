import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CALLOUT = {
  _style: 'shape=callout;whiteSpace=wrap;html=1;perimeter=calloutPerimeter;',
  _width: 120,
  _height: 80,
}

export function Callout(props: DiagramNodeProps) {
  return <Shape {...CALLOUT} {...props} _style={extendStyle(CALLOUT, props)} />
}
