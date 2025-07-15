import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STATUS_BAR = {
  _style:
    'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.misc.rrect;rSize=0;strokeColor=#999999;fillColor=#ffffff;',
  _width: 500,
  _height: 30,
}

export function StatusBar(props: DiagramNodeProps) {
  return <Shape {...STATUS_BAR} {...props} />
}
