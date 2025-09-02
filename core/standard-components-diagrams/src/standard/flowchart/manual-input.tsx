import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MANUAL_INPUT = {
  _style: {
    entity:
      'html=1;strokeWidth=2;shape=manualInput;whiteSpace=wrap;rounded=1;size=26;arcSize=11;',
  },
  _original_width: 100,
  _original_height: 60,
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
