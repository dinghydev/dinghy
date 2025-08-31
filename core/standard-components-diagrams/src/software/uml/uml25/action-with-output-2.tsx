import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ACTION_WITH_OUTPUT_2 = {
  _style: 'text;verticalAlign=middle;align=left;html=1;',
  _width: 1,
  _height: 60,
}

export function ActionWithOutput2(props: DiagramNodeProps) {
  return (
    <Shape
      {...ACTION_WITH_OUTPUT_2}
      {...props}
      _style={extendStyle(ACTION_WITH_OUTPUT_2, props)}
    />
  )
}
