import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INDETERMINATE_PROGRESS_BAR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.android.indeterminate_progress_bar;strokeColor=#33B5E5;pointerEvents=1',
  },
  _width: 149,
  _height: 5,
}

export function IndeterminateProgressBar(props: DiagramNodeProps) {
  return (
    <Shape
      {...INDETERMINATE_PROGRESS_BAR}
      {...props}
      _style={extendStyle(INDETERMINATE_PROGRESS_BAR, props)}
    />
  )
}
