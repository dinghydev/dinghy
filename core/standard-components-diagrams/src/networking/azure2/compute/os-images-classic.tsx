import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OS_IMAGES_CLASSIC = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/OS_Images_Classic.svg;',
  _width: 69,
  _height: 64,
}

export function OsImagesClassic(props: DiagramNodeProps) {
  return <Shape {...OS_IMAGES_CLASSIC} {...props} />
}
