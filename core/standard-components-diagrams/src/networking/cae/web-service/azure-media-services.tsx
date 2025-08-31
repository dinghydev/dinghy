import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AZURE_MEDIA_SERVICES = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Media_Services.svg;strokeColor=none;',
  _width: 44,
  _height: 50,
}

export function AzureMediaServices(props: DiagramNodeProps) {
  return (
    <Shape
      {...AZURE_MEDIA_SERVICES}
      {...props}
      _style={extendStyle(AZURE_MEDIA_SERVICES, props)}
    />
  )
}
