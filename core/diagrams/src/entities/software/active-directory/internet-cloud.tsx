import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INTERNET_CLOUD = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/internet_cloud.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 31.5,
}

export function InternetCloud(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, INTERNET_CLOUD)} />
}
