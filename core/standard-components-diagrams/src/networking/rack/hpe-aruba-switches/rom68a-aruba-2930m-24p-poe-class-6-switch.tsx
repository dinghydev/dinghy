import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROM68A_ARUBA_2930M_24P_POE_CLASS_6_SWITCH = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.rom68a_aruba_2930m_24p_poe_class_6_switch;',
  },
  _width: 142,
  _height: 15,
}

export function Rom68aAruba2930m24pPoeClass6Switch(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROM68A_ARUBA_2930M_24P_POE_CLASS_6_SWITCH}
      {...props}
      _style={extendStyle(ROM68A_ARUBA_2930M_24P_POE_CLASS_6_SWITCH, props)}
    />
  )
}
