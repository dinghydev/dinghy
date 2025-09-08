import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PROGRESS_BAR = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;fillColor=#E9ECEF;strokeColor=none;',
  },
  _original_width: 0,
  _original_height: 20,
}

export function ProgressBar(props: DiagramNodeProps) {
  return (
    <Shape
      {...PROGRESS_BAR}
      {...props}
      _style={extendStyle(PROGRESS_BAR, props)}
    />
  )
}
