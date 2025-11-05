import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VIDEO_INDEXER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Video_Indexer.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 68,
}

export function VideoIndexer(props: NodeProps) {
  return (
    <Shape
      {...VIDEO_INDEXER}
      {...props}
      _style={extendStyle(VIDEO_INDEXER, props)}
    />
  )
}
