import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SPINNER_DISABLED_FOCUSED_BRIGHT = {
  _style: {
    entity:
      'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.android.rect;rounded=1;fillColor=#ccf2ff;strokeColor=#88c5f5;',
  },
  _original_width: 0,
  _original_height: 28,
}

export function SpinnerDisabledFocusedBright(props: DiagramNodeProps) {
  return (
    <Shape
      {...SPINNER_DISABLED_FOCUSED_BRIGHT}
      {...props}
      _style={extendStyle(SPINNER_DISABLED_FOCUSED_BRIGHT, props)}
    />
  )
}
