import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CENTRAL_SERVICE_INSTANCE_FOR_SAP = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Central_Service_Instance_for_SAP.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 35.6,
}

export function CentralServiceInstanceForSap(props: DiagramNodeProps) {
  return (
    <Shape
      {...CENTRAL_SERVICE_INSTANCE_FOR_SAP}
      {...props}
      _style={extendStyle(CENTRAL_SERVICE_INSTANCE_FOR_SAP, props)}
    />
  )
}
