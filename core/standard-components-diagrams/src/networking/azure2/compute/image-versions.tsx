import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IMAGE_VERSIONS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Image_Versions.svg;',
  _width: 67,
  _height: 64,
}

export function ImageVersions(props: DiagramNodeProps) {
  return <Shape {...IMAGE_VERSIONS} {...props} />
}
