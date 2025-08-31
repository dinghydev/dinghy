import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APP_SERVICE_DOMAINS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/CustomDomain.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 42,
}

export function AppServiceDomains(props: DiagramNodeProps) {
  return (
    <Shape
      {...APP_SERVICE_DOMAINS}
      {...props}
      _style={extendStyle(APP_SERVICE_DOMAINS, props)}
    />
  )
}
