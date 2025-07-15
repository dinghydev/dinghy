import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MEDIA_2 = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.media2;',
  _width: 60,
  _height: 60,
}

export function Media2(props: DiagramNodeProps) {
  return <Shape {...MEDIA_2} {...props} />
}
