import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MODULAR_SWITCH_SBX8106 = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/switch/Modular_Switch_SBx8106.svg;strokeColor=none;',
  },
  _original_width: 85.8,
  _original_height: 73.8,
}

export function ModularSwitchSbx8106(props: DiagramNodeProps) {
  return (
    <Shape
      {...MODULAR_SWITCH_SBX8106}
      {...props}
      _style={extendStyle(MODULAR_SWITCH_SBX8106, props)}
    />
  )
}
