import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VOIP_IP_PHONE = {
  _style:
    'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/computer_and_terminals/VOIP_IP_phone.svg;strokeColor=none;',
  _width: 30,
  _height: 45.6,
}

export function VoipIpPhone(props: DiagramNodeProps) {
  return <Shape {...VOIP_IP_PHONE} {...props} />
}
