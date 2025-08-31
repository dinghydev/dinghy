import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PARAMETER_2 = {
  _style: 'text;verticalAlign=middle;align=center;html=1;',
  _width: 1,
  _height: 40,
}

export function Parameter2(props: DiagramNodeProps) {
  return (
    <Shape
      {...PARAMETER_2}
      {...props}
      _style={extendStyle(PARAMETER_2, props)}
    />
  )
}
