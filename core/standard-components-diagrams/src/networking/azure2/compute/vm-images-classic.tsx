import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VM_IMAGES_CLASSIC = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/VM_Images_Classic.svg;strokeColor=none;',
  _width: 69,
  _height: 64,
}

export function VmImagesClassic(props: DiagramNodeProps) {
  return (
    <Shape
      {...VM_IMAGES_CLASSIC}
      {...props}
      _style={extendStyle(VM_IMAGES_CLASSIC, props)}
    />
  )
}
