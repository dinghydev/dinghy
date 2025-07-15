import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MEDIA = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.media;',
  _width: 60,
  _height: 60,
}

export function Media(props: DiagramNodeProps) {
  return <Shape {...MEDIA} {...props} />
}
