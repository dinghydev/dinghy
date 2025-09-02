import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STREAM = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.stream;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Stream(props: DiagramNodeProps) {
  return <Shape {...STREAM} {...props} _style={extendStyle(STREAM, props)} />
}
