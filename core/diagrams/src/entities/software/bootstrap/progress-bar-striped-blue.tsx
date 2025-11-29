import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PROGRESS_BAR_STRIPED_BLUE = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=none;fillColor=#f6f6f6;whiteSpace=wrap;',
  },
  _width: 0,
  _height: 20,
}

export function ProgressBarStripedBlue(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, PROGRESS_BAR_STRIPED_BLUE)} />
  )
}
