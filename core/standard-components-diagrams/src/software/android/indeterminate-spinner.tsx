import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INDETERMINATE_SPINNER = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.android.indeterminateSpinner;',
  _width: 50,
  _height: 50,
}

export function IndeterminateSpinner(props: DiagramNodeProps) {
  return <Shape {...INDETERMINATE_SPINNER} {...props} />
}
