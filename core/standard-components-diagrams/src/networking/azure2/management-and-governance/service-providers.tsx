import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVICE_PROVIDERS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Service_Providers.svg;strokeColor=none;',
  _width: 66,
  _height: 68,
}

export function ServiceProviders(props: DiagramNodeProps) {
  return (
    <Shape
      {...SERVICE_PROVIDERS}
      {...props}
      _style={extendStyle(SERVICE_PROVIDERS, props)}
    />
  )
}
