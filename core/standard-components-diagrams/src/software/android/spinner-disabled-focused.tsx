import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SPINNER_DISABLED_FOCUSED = {
  _style:
    'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.android.rect;rounded=1;fillColor=#207585;strokeColor=#33b5e5;',
  _width: 0,
  _height: 28,
}

export function SpinnerDisabledFocused(props: DiagramNodeProps) {
  return <Shape {...SPINNER_DISABLED_FOCUSED} {...props} />
}
