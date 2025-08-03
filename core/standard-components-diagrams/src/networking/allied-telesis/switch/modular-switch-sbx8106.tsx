import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MODULAR_SWITCH_SBX8106 = {
  _style:
    'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/switch/Modular_Switch_SBx8106.svg;strokeColor=none;',
  _width: 85.8,
  _height: 73.8,
}

export function ModularSwitchSbx8106(props: DiagramNodeProps) {
  return <Shape {...MODULAR_SWITCH_SBX8106} {...props} />
}
