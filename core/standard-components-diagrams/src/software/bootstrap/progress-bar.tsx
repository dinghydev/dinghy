import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PROGRESS_BAR = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;fillColor=#E9ECEF;strokeColor=none;',
  _width: 0,
  _height: 20,
}

export function ProgressBar(props: DiagramNodeProps) {
  return <Shape {...PROGRESS_BAR} {...props} />
}
