import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TEXTFIELD_NORMAL = {
  _style: {
    entity:
      'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.android.textfield;align=center;strokeColor=#999999;pointerEvents=1',
  },
  _original_width: 174,
  _original_height: 30,
}

export function TextfieldNormal(props: DiagramNodeProps) {
  return (
    <Shape
      {...TEXTFIELD_NORMAL}
      {...props}
      _style={extendStyle(TEXTFIELD_NORMAL, props)}
    />
  )
}
