import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SOFTWARE_AS_A_SERVICE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/integration/Software_as_a_Service.svg;strokeColor=none;',
  },
  _width: 64,
  _height: 53,
}

export function SoftwareAsAService(props: DiagramNodeProps) {
  return (
    <Shape
      {...SOFTWARE_AS_A_SERVICE}
      {...props}
      _style={extendStyle(SOFTWARE_AS_A_SERVICE, props)}
    />
  )
}
