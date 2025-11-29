import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IMAGE_VERSIONS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Image_Versions.svg;strokeColor=none;',
  },
  _original_width: 67,
  _original_height: 64,
}

export function ImageVersions(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, IMAGE_VERSIONS)} />
}
