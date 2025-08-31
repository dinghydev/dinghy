import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIRTUAL_INSTANCE_FOR_SAP = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Virtual_Instance_for_SAP.svg;strokeColor=none;',
  _width: 68,
  _height: 62.839999999999996,
}

export function VirtualInstanceForSap(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIRTUAL_INSTANCE_FOR_SAP}
      {...props}
      _style={extendStyle(VIRTUAL_INSTANCE_FOR_SAP, props)}
    />
  )
}
