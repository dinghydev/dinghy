import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LIGHT_ACTIVATED_SCR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.opto_electronics.light-activated_scr;pointerEvents=1;',
  },
  _width: 100,
  _height: 70,
}

export function LightActivatedScr(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LIGHT_ACTIVATED_SCR)} />
}
