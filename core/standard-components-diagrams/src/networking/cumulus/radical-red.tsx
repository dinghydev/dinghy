import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RADICAL_RED = {
  _style: {
    entity: 'fillColor=#F1446F;strokeColor=none;whiteSpace=wrap;html=1;',
  },
  _width: 60,
  _height: 60,
}

export function RadicalRed(props: DiagramNodeProps) {
  return (
    <Shape
      {...RADICAL_RED}
      {...props}
      _style={extendStyle(RADICAL_RED, props)}
    />
  )
}
