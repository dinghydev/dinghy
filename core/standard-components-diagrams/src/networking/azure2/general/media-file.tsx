import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MEDIA_FILE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Media_File.svg;strokeColor=none;',
  },
  _width: 52,
  _height: 64,
}

export function MediaFile(props: DiagramNodeProps) {
  return (
    <Shape {...MEDIA_FILE} {...props} _style={extendStyle(MEDIA_FILE, props)} />
  )
}
