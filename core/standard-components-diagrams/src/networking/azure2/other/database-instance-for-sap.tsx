import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATABASE_INSTANCE_FOR_SAP = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Database_Instance_for_SAP.svg;',
  _width: 68,
  _height: 65.2,
}

export function DatabaseInstanceForSap(props: DiagramNodeProps) {
  return <Shape {...DATABASE_INSTANCE_FOR_SAP} {...props} />
}
