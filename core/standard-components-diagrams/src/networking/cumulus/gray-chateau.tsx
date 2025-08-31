import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GRAY_CHATEAU = {
  _style: 'fillColor=#8C9AA6;strokeColor=none;whiteSpace=wrap;html=1;',
  _width: 60,
  _height: 60,
}

export function GrayChateau(props: DiagramNodeProps) {
  return (
    <Shape
      {...GRAY_CHATEAU}
      {...props}
      _style={extendStyle(GRAY_CHATEAU, props)}
    />
  )
}
