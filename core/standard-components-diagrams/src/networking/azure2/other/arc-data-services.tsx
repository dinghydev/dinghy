import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARC_DATA_SERVICES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Arc_Data_Services.svg;strokeColor=none;',
  },
  _width: 65.08,
  _height: 68,
}

export function ArcDataServices(props: DiagramNodeProps) {
  return (
    <Shape
      {...ARC_DATA_SERVICES}
      {...props}
      _style={extendStyle(ARC_DATA_SERVICES, props)}
    />
  )
}
