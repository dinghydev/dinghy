import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const POPOVER_ON_TOP_2 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;fillColor=#6C767D;strokeColor=none;perimeter=none;whiteSpace=wrap;resizeWidth=1;align=center;spacing=5;fontColor=#FFFFFF;',
  },
  _width: 1,
  _height: 80,
}

export function PopoverOnTop2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, POPOVER_ON_TOP_2)} />
}
