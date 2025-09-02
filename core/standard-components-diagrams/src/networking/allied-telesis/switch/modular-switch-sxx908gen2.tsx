import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MODULAR_SWITCH_SXX908GEN2 = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/switch/Modular_Switch_SXx908GEN2.svg;strokeColor=none;',
  },
  _original_width: 78,
  _original_height: 66.60000000000001,
}

export function ModularSwitchSxx908gen2(props: DiagramNodeProps) {
  return (
    <Shape
      {...MODULAR_SWITCH_SXX908GEN2}
      {...props}
      _style={extendStyle(MODULAR_SWITCH_SXX908GEN2, props)}
    />
  )
}
