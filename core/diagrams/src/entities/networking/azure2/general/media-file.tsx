import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MEDIA_FILE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Media_File.svg;strokeColor=none;',
  },
  _original_width: 52,
  _original_height: 64,
}

export function MediaFile(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MEDIA_FILE)} />
}
