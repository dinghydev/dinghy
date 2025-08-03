import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CENTER_FOR_SAP = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Center_for_SAP.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function CenterForSap(props: DiagramNodeProps) {
  return <Shape {...CENTER_FOR_SAP} {...props} />
}
