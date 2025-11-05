import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MEDIA = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.media;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Media(props: NodeProps) {
  return <Shape {...MEDIA} {...props} _style={extendStyle(MEDIA, props)} />
}
