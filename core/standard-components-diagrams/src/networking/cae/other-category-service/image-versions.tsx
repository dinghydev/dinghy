import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IMAGE_VERSIONS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Image_Versions.svg;strokeColor=none;',
  _width: 50,
  _height: 48,
}

export function ImageVersions(props: DiagramNodeProps) {
  return <Shape {...IMAGE_VERSIONS} {...props} />
}
