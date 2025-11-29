import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SPINNER_PRESSED = {
  _style: {
    entity:
      'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.android.rect;rounded=1;fillColor=#33b5e5;strokeColor=#33b5e5;',
  },
  _width: 0,
  _height: 28,
}

export function SpinnerPressed(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SPINNER_PRESSED)} />
}
