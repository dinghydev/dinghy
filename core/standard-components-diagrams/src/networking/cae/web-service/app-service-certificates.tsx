import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APP_SERVICE_CERTIFICATES = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Certificate.svg;strokeColor=none;',
  _width: 50,
  _height: 42,
}

export function AppServiceCertificates(props: DiagramNodeProps) {
  return (
    <Shape
      {...APP_SERVICE_CERTIFICATES}
      {...props}
      _style={extendStyle(APP_SERVICE_CERTIFICATES, props)}
    />
  )
}
