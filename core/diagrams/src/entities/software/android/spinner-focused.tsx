import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SPINNER_FOCUSED = {
  _style: {
    entity:
      'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.android.spinner2;align=center;fillColor=#33b5e5;strokeColor=#33b5e5;verticalAlign=bottom',
  },
  _width: 110,
  _height: 10,
}

export function SpinnerFocused(props: NodeProps) {
  return (
    <Shape
      {...SPINNER_FOCUSED}
      {...props}
      _style={extendStyle(SPINNER_FOCUSED, props)}
    />
  )
}
