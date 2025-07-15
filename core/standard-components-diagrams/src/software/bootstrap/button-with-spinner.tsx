import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUTTON_WITH_SPINNER = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=none;html=1;whiteSpace=wrap;fillColor=#59AFFD;fontColor=#ffffff;',
  _width: 0,
  _height: 40,
}

export function ButtonWithSpinner(props: DiagramNodeProps) {
  return <Shape {...BUTTON_WITH_SPINNER} {...props} />
}
