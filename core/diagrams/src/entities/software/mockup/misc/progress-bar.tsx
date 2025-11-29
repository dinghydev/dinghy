import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PROGRESS_BAR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.misc.progressBar;fillColor=#cccccc;strokeColor=none;fillColor2=#99ddff;barPos=80;',
  },
  _width: 200,
  _height: 20,
}

export function ProgressBar(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PROGRESS_BAR)} />
}
