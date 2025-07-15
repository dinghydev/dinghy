import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LIST_WITH_DIVIDER = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;fillColor=#ffffff;strokeColor=#999999;',
  _width: 0,
  _height: 345,
}

export function ListWithDivider(props: DiagramNodeProps) {
  return <Shape {...LIST_WITH_DIVIDER} {...props} />
}
