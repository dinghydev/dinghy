import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OS_IMAGES_CLASSIC = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/OS_Images_Classic.svg;strokeColor=none;',
  },
  _width: 69,
  _height: 64,
}

export function OsImagesClassic(props: DiagramNodeProps) {
  return (
    <Shape
      {...OS_IMAGES_CLASSIC}
      {...props}
      _style={extendStyle(OS_IMAGES_CLASSIC, props)}
    />
  )
}
