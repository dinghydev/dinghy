import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MANUAL_INPUT = {
  _style: 'shape=manualInput;whiteSpace=wrap;html=1;',
  _width: 60,
  _height: 60,
}

export function ManualInput(props: DiagramNodeProps) {
  return (
    <Shape
      {...MANUAL_INPUT}
      {...props}
      _style={extendStyle(MANUAL_INPUT, props)}
    />
  )
}
