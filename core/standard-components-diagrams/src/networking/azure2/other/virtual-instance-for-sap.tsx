import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VIRTUAL_INSTANCE_FOR_SAP = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Virtual_Instance_for_SAP.svg;',
  _width: 68,
  _height: 62.839999999999996,
}

export function VirtualInstanceForSap(props: DiagramNodeProps) {
  return <Shape {...VIRTUAL_INSTANCE_FOR_SAP} {...props} />
}
