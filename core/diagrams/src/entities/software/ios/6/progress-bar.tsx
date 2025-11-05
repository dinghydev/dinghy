import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PROGRESS_BAR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iProgressBar;barPos=40;',
  },
  _width: 150,
  _height: 10,
}

export function ProgressBar(props: NodeProps) {
  return (
    <Shape
      {...PROGRESS_BAR}
      {...props}
      _style={extendStyle(PROGRESS_BAR, props)}
    />
  )
}
