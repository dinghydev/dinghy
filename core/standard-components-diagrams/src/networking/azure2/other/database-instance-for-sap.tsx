import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATABASE_INSTANCE_FOR_SAP = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Database_Instance_for_SAP.svg;strokeColor=none;',
  _width: 68,
  _height: 65.2,
}

export function DatabaseInstanceForSap(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATABASE_INSTANCE_FOR_SAP}
      {...props}
      _style={extendStyle(DATABASE_INSTANCE_FOR_SAP, props)}
    />
  )
}
