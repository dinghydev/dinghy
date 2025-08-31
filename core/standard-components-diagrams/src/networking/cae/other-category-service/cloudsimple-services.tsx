import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUDSIMPLE_SERVICES = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/CloudSimple_Services.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function CloudsimpleServices(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUDSIMPLE_SERVICES}
      {...props}
      _style={extendStyle(CLOUDSIMPLE_SERVICES, props)}
    />
  )
}
