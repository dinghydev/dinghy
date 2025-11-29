import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OS_IMAGES_CLASSIC = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/OS_Images_Classic.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 46,
}

export function OsImagesClassic(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, OS_IMAGES_CLASSIC)} />
}
