import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SPINNER_DISABLED_FOCUSED = {
  _style: {
    entity:
      'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.android.rect;rounded=1;fillColor=#207585;strokeColor=#33b5e5;',
  },
  _width: 0,
  _height: 28,
}

export function SpinnerDisabledFocused(props: NodeProps) {
  return (
    <Shape
      {...SPINNER_DISABLED_FOCUSED}
      {...props}
      _style={extendStyle(SPINNER_DISABLED_FOCUSED, props)}
    />
  )
}
