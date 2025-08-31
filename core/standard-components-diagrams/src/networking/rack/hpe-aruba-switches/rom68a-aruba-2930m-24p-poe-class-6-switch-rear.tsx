import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROM68A_ARUBA_2930M_24P_POE_CLASS_6_SWITCH_REAR = {
  _style:
    'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.rom68a_aruba_2930m_24p_poe_class_6_switch_rear;',
  _width: 142,
  _height: 15,
}

export function Rom68aAruba2930m24pPoeClass6SwitchRear(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...ROM68A_ARUBA_2930M_24P_POE_CLASS_6_SWITCH_REAR}
      {...props}
      _style={extendStyle(
        ROM68A_ARUBA_2930M_24P_POE_CLASS_6_SWITCH_REAR,
        props,
      )}
    />
  )
}
