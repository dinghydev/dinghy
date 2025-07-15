import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IMAGE_VERSION = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Image_Version.svg;',
  _width: 68,
  _height: 68,
}

export function ImageVersion(props: DiagramNodeProps) {
  return <Shape {...IMAGE_VERSION} {...props} />
}
