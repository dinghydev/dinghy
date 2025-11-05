import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MEDIA_SERVICE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.media_service;pointerEvents=1;',
  },
  _original_width: 45,
  _original_height: 50,
}

export function MediaService(props: NodeProps) {
  return (
    <Shape
      {...MEDIA_SERVICE}
      {...props}
      _style={extendStyle(MEDIA_SERVICE, props)}
    />
  )
}
