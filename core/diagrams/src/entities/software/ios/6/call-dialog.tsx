import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CALL_DIALOG = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iCallDialog;sketch=0;',
  },
  _width: 150,
  _height: 125,
}

export function CallDialog(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CALL_DIALOG)} />
}
