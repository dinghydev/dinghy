import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VM_IMAGES = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/VM_Images.svg;strokeColor=none;',
  _width: 50,
  _height: 46,
}

export function VmImages(props: DiagramNodeProps) {
  return (
    <Shape {...VM_IMAGES} {...props} _style={extendStyle(VM_IMAGES, props)} />
  )
}
