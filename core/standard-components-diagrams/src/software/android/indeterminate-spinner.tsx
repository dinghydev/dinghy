import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INDETERMINATE_SPINNER = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.android.indeterminateSpinner;',
  _width: 60,
  _height: 60,
}

export function IndeterminateSpinner(props: DiagramNodeProps) {
  return (
    <Shape
      {...INDETERMINATE_SPINNER}
      {...props}
      _style={extendStyle(INDETERMINATE_SPINNER, props)}
    />
  )
}
