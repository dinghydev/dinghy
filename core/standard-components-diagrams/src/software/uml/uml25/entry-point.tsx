import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ENTRY_POINT = {
  _style: 'ellipse;',
  _width: 30,
  _height: 30,
}

export function EntryPoint(props: DiagramNodeProps) {
  return (
    <Shape
      {...ENTRY_POINT}
      {...props}
      _style={extendStyle(ENTRY_POINT, props)}
    />
  )
}
