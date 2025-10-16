import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VM_IMAGES = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/VM_Images.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 46,
}

export function VmImages(props: DiagramNodeProps) {
  return (
    <Shape {...VM_IMAGES} {...props} _style={extendStyle(VM_IMAGES, props)} />
  )
}
