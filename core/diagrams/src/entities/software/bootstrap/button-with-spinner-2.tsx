import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUTTON_WITH_SPINNER_2 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=none;html=1;whiteSpace=wrap;fillColor=#59AFFD;fontColor=#ffffff;align=right;spacing=10;',
  },
  _width: 0,
  _height: 40,
}

export function ButtonWithSpinner2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BUTTON_WITH_SPINNER_2)} />
}
