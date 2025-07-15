import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MODULAR_SWITCH_SBX8112 = {
  _style:
    'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/switch/Modular_Switch_SBx8112.svg;',
  _width: 89.4,
  _height: 91.8,
}

export function ModularSwitchSbx8112(props: DiagramNodeProps) {
  return <Shape {...MODULAR_SWITCH_SBX8112} {...props} />
}
