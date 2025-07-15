import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ARC_DATA_SERVICES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Arc_Data_Services.svg;',
  _width: 65.08,
  _height: 68,
}

export function ArcDataServices(props: DiagramNodeProps) {
  return <Shape {...ARC_DATA_SERVICES} {...props} />
}
