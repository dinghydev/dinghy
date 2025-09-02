import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IMAGE_VERSION = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Image_Version.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function ImageVersion(props: DiagramNodeProps) {
  return (
    <Shape
      {...IMAGE_VERSION}
      {...props}
      _style={extendStyle(IMAGE_VERSION, props)}
    />
  )
}
