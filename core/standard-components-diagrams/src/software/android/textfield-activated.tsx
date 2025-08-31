import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TEXTFIELD_ACTIVATED = {
  _style:
    'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.android.textfield;align=center;strokeColor=#33b5e5;pointerEvents=1',
  _width: 174,
  _height: 30,
}

export function TextfieldActivated(props: DiagramNodeProps) {
  return (
    <Shape
      {...TEXTFIELD_ACTIVATED}
      {...props}
      _style={extendStyle(TEXTFIELD_ACTIVATED, props)}
    />
  )
}
