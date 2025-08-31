import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CENTER_FOR_SAP = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Center_for_SAP.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function CenterForSap(props: DiagramNodeProps) {
  return (
    <Shape
      {...CENTER_FOR_SAP}
      {...props}
      _style={extendStyle(CENTER_FOR_SAP, props)}
    />
  )
}
