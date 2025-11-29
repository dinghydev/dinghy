import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLOUD_PROGRESS_BAR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iCloudProgressBar;barPos=20;',
  },
  _width: 150,
  _height: 10,
}

export function CloudProgressBar(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CLOUD_PROGRESS_BAR)} />
}
