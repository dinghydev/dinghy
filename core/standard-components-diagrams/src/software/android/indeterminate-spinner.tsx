import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INDETERMINATE_SPINNER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.android.indeterminateSpinner;',
  },
  _original_width: 50,
  _original_height: 50,
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
