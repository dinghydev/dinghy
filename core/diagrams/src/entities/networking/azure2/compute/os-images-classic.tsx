import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OS_IMAGES_CLASSIC = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/OS_Images_Classic.svg;strokeColor=none;',
  },
  _original_width: 69,
  _original_height: 64,
}

export function OsImagesClassic(props: NodeProps) {
  return (
    <Shape
      {...OS_IMAGES_CLASSIC}
      {...props}
      _style={extendStyle(OS_IMAGES_CLASSIC, props)}
    />
  )
}
