import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MEDIA_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.media2;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Media2(props: DiagramNodeProps) {
  return <Shape {...MEDIA_2} {...props} _style={extendStyle(MEDIA_2, props)} />
}
