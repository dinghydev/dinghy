import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TEXTFIELD_NORMAL = {
  _style: {
    entity:
      'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.android.textfield;align=center;strokeColor=#999999;pointerEvents=1',
  },
  _width: 174,
  _height: 30,
}

export function TextfieldNormal(props: NodeProps) {
  return (
    <Shape
      {...TEXTFIELD_NORMAL}
      {...props}
      _style={extendStyle(TEXTFIELD_NORMAL, props)}
    />
  )
}
