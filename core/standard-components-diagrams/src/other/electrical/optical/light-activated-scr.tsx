import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LIGHT_ACTIVATED_SCR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.opto_electronics.light-activated_scr;pointerEvents=1;',
  },
  _original_width: 100,
  _original_height: 70,
}

export function LightActivatedScr(props: DiagramNodeProps) {
  return (
    <Shape
      {...LIGHT_ACTIVATED_SCR}
      {...props}
      _style={extendStyle(LIGHT_ACTIVATED_SCR, props)}
    />
  )
}
