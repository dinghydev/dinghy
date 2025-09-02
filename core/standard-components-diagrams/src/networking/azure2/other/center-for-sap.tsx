import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CENTER_FOR_SAP = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Center_for_SAP.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
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
