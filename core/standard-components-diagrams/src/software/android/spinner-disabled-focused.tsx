import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SPINNER_DISABLED_FOCUSED = {
  _style: {
    entity:
      'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.android.rect;rounded=1;fillColor=#207585;strokeColor=#33b5e5;',
  },
  _original_width: 0,
  _original_height: 28,
}

export function SpinnerDisabledFocused(props: DiagramNodeProps) {
  return (
    <Shape
      {...SPINNER_DISABLED_FOCUSED}
      {...props}
      _style={extendStyle(SPINNER_DISABLED_FOCUSED, props)}
    />
  )
}
