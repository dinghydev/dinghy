import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SPINNER_FOCUSED = {
  _style:
    'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.android.spinner2;align=center;fillColor=#33b5e5;strokeColor=#33b5e5;verticalAlign=bottom',
  _width: 110,
  _height: 10,
}

export function SpinnerFocused(props: DiagramNodeProps) {
  return <Shape {...SPINNER_FOCUSED} {...props} />
}
