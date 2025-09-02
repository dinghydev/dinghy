import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROGRESS_BAR_STRIPED_BLUE = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=none;fillColor=#f6f6f6;whiteSpace=wrap;',
  },
  _original_width: 0,
  _original_height: 20,
}

export function ProgressBarStripedBlue(props: DiagramNodeProps) {
  return (
    <Shape
      {...PROGRESS_BAR_STRIPED_BLUE}
      {...props}
      _style={extendStyle(PROGRESS_BAR_STRIPED_BLUE, props)}
    />
  )
}
