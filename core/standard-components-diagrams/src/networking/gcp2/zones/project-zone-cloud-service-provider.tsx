import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROJECT_ZONE_CLOUD_SERVICE_PROVIDER = {
  _style:
    'shape=rect;strokeColor=none;strokeWidth=2;shadow=0;gradientColor=none;fontColor=#757575;align=left;html=1;fontStyle=0;spacingTop=3;fillColor=#F6F6F6;verticalAlign=top;fontSize=10;spacingLeft=10;spacing=0;',
  _width: 530,
  _height: 490,
}

export function ProjectZoneCloudServiceProvider(props: DiagramNodeProps) {
  return (
    <Shape
      {...PROJECT_ZONE_CLOUD_SERVICE_PROVIDER}
      {...props}
      _style={extendStyle(PROJECT_ZONE_CLOUD_SERVICE_PROVIDER, props)}
    />
  )
}
