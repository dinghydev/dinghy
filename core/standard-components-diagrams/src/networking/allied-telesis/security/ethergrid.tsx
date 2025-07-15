import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ETHERGRID = {
  _style:
    'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/security/EtherGRID.svg;',
  _width: 89.4,
  _height: 64.80000000000001,
}

export function Ethergrid(props: DiagramNodeProps) {
  return <Shape {...ETHERGRID} {...props} />
}
