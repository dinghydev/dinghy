import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROM67A_ARUBA_2930M_POE_CLASS_6_SWITCH_REAR = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.rom67a_aruba_2930m_poe_class_6_switch_rear;',
  },
  _original_width: 142,
  _original_height: 15,
}

export function Rom67aAruba2930mPoeClass6SwitchRear(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROM67A_ARUBA_2930M_POE_CLASS_6_SWITCH_REAR}
      {...props}
      _style={extendStyle(ROM67A_ARUBA_2930M_POE_CLASS_6_SWITCH_REAR, props)}
    />
  )
}
