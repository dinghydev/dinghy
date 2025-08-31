import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PARAMETER_3 = {
  _style: 'triangle;html=1;direction=north;',
  _width: 2,
  _height: 40,
}

export function Parameter3(props: DiagramNodeProps) {
  return (
    <Shape
      {...PARAMETER_3}
      {...props}
      _style={extendStyle(PARAMETER_3, props)}
    />
  )
}
