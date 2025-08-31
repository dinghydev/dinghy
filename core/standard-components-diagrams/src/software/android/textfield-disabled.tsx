import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TEXTFIELD_DISABLED = {
  _style: {
    entity:
      'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.android.textfield;align=center;strokeColor=#4D4D4D;pointerEvents=1',
  },
  _width: 174,
  _height: 30,
}

export function TextfieldDisabled(props: DiagramNodeProps) {
  return (
    <Shape
      {...TEXTFIELD_DISABLED}
      {...props}
      _style={extendStyle(TEXTFIELD_DISABLED, props)}
    />
  )
}
