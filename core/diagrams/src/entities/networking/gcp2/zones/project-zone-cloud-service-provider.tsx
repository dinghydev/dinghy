import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PROJECT_ZONE_CLOUD_SERVICE_PROVIDER = {
  _style: {
    entity:
      'shape=rect;strokeColor=none;strokeWidth=2;shadow=0;gradientColor=none;fontColor=#757575;align=left;html=1;fontStyle=0;spacingTop=3;fillColor=#F6F6F6;verticalAlign=top;fontSize=10;spacingLeft=10;spacing=0;',
  },
  _width: 530,
  _height: 490,
}

export function ProjectZoneCloudServiceProvider(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, PROJECT_ZONE_CLOUD_SERVICE_PROVIDER)}
    />
  )
}
