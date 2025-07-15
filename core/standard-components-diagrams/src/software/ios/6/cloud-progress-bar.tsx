import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOUD_PROGRESS_BAR = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iCloudProgressBar;barPos=20;',
  _width: 150,
  _height: 10,
}

export function CloudProgressBar(props: DiagramNodeProps) {
  return <Shape {...CLOUD_PROGRESS_BAR} {...props} />
}
