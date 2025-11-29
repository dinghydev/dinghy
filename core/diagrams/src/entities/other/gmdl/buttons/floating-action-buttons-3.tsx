import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FLOATING_ACTION_BUTTONS_3 = {
  _style: {
    entity:
      'dashed=0;html=1;shape=mxgraph.gmdl.user;strokeColor=none;fillColor=#808080;shadow=1;gradientColor=none;sketch=0;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=20;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;',
  },
  _width: 50,
  _height: 456,
}

export function FloatingActionButtons3(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, FLOATING_ACTION_BUTTONS_3)} />
  )
}
