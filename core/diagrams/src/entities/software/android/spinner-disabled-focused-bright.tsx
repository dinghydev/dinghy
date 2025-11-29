import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SPINNER_DISABLED_FOCUSED_BRIGHT = {
  _style: {
    entity:
      'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.android.rect;rounded=1;fillColor=#ccf2ff;strokeColor=#88c5f5;',
  },
  _width: 0,
  _height: 28,
}

export function SpinnerDisabledFocusedBright(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, SPINNER_DISABLED_FOCUSED_BRIGHT)}
    />
  )
}
