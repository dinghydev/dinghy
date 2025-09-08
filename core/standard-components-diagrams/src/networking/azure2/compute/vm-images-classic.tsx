import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VM_IMAGES_CLASSIC = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/VM_Images_Classic.svg;strokeColor=none;',
  },
  _original_width: 69,
  _original_height: 64,
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
