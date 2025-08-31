import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MEDIA = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.media;',
  },
  _width: 60,
  _height: 60,
}

export function Media(props: DiagramNodeProps) {
  return <Shape {...MEDIA} {...props} _style={extendStyle(MEDIA, props)} />
}
