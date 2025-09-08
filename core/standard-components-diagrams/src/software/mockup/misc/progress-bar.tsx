import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PROGRESS_BAR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.misc.progressBar;fillColor=#cccccc;strokeColor=none;fillColor2=#99ddff;barPos=80;',
  },
  _original_width: 200,
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
